import { addMember } from "../../lib/posts";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  // call Ghost admin api
  const response = await addMember(req.body);

  // if there is an error
  if (response.context) {
    res.status(400).send({ error: response.context });
  } else {
    res.status(200).json(response);
  }
}
