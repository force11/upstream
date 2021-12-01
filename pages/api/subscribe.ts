// import { addMember } from "../../lib/posts";

export default function handler(req, res) {
  // if (req.method !== "POST") {
  //   res.status(405).send({ message: "Only POST requests allowed" });
  //   return;
  // }
  // const body = JSON.parse(req.body);
  // console.log(req.body);
  // call Ghost admin api
  //const result = addMember(body.email, body.name);
  res.status(200).json(req.body);
}
