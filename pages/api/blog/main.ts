//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import Blog from "@/models/blog";
import dbConnect from "@/utils/dbConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const {
          page = 1,
          sort,

          limit = 4,
          search = "",
        } = req.query;
        const where = {};

        if (search && search !== "") {
          where["title"] = { $regex: search, $options: "i" };
        }

        const { books, pages } = await Blog.paginate({
          page,
          limit,
          sort,
          where,
        });

        console.log('where' , where ,req.query)



        res.status(200).json({ books, pages });
      } catch (error) {
        console.error(error?.message);
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
};

export default handler;
