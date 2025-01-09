import { Request, Response } from "express";
import User from "../models/userModel";

const createCurrentUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { auth0Id } = req.body;

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = User.create(req.body);

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

export { createCurrentUser };
