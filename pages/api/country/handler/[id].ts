import auth from "@/utils/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import Country from "@/models/country";
import Book from "@/models/book";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const user = req.user;
  if (user?.role !== "admin")
    return res.status(403).json({
      message: "You are not authorized to access this resource",
    });

  switch (req.method) {
    case "DELETE":
      try {
        const { id } = req.query;
        await Country.findByIdAndDelete(id);
        await Book.deleteMany({ Country: id });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "PUT":
      try {
        const { id } = req.query;
        const { title , titlefr} = req.body;
        await Country.updateOne({ _id: id }, { title , titlefr });
        res.status(200).json({ success: true, message: "Country updated !" });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
};

export default auth(handler);
