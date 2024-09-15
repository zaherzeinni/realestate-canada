//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/book";
import dbConnect from "@/utils/dbConnect";
import { query } from "firebase/firestore";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const {
          page = 1,
          sort,
         country = "",
          city="",
          limit = 4,
          search = "",
          rooms,
          baths,
          minPrice,
          maxPrice
          
        
        } = req.query;
        const where = {};



       

if (rooms !== "-1") {
  where['details.rooms'] =  { $gte: parseInt(rooms) } //rooms
}

if (baths !== "-1") {
  where['details.baths'] = { $gte: parseInt(baths) }  // baths
}



if ([type] && type !== "") {
  where["type"] = type;
}



if (minPrice) {
  where["price"] = { $gte: parseInt(minPrice) }
}

if (maxPrice) {
  where["price"]= { $lte: parseInt(maxPrice) }
}
        

        if (search && search !== "") {
          where["title"] = { $regex: search, $options: "i" };
        }

        // if (category && category !== "") {
        //   where["category"] = category;
        // }

        if (city && city !== "") {
          where["city"] = city;
        }


       


          console.log("here" ,where)

        const { books, pages } = await Book.paginate({
          page,
          limit,
          sort,
          where,
        });
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
