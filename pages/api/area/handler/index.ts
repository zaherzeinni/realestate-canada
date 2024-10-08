import type { NextApiRequest, NextApiResponse } from "next";
import City from "@/models/area";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const categories = await City.find({}).sort({ createdAt: -1 });
        res.status(201).json(categories);
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false, error: "Invalid method" });
      break;
  }
};

export default handler;
