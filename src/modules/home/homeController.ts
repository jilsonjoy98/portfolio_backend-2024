import { Request, Response } from "express";
import * as HomeService from "./homeService";

// Create a single Home
export const createSingleHome = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, position, imageURL } = req.body;

    // Attempt to create a new Home
    const newHome = await HomeService.createSingleHome({ name, position, imageURL });
    res.status(201).json(newHome);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
// Create a new home
// export const createHome = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const newHome = await HomeService.createHome(req.body);
//     res.status(201).json(newHome);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create home" });
//   }
// };

// (Other functions remain the same)

export const getAllHomes = async (req: Request, res: Response): Promise<void> => {
  try {
    const homes = await HomeService.getAllHomes();
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch homes" });
  }
};

export const getHomeById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const home = await HomeService.getHomeById(id);
    if (!home) {
      res.status(404).json({ error: "Home not found" });
      return;
    }
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch home by ID" });
  }
};

export const editHome = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedHome = await HomeService.editHome(id, req.body);
    if (!updatedHome) {
      res.status(404).json({ error: "Home not found" });
      return;
    }
    res.status(200).json(updatedHome);
  } catch (error) {
    res.status(500).json({ error: "Failed to update home" });
  }
};

export const deleteHome = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedHome = await HomeService.deleteHome(id);
    if (!deletedHome) {
      res.status(404).json({ error: "Home not found" });
      return;
    }
    res.status(200).json({ message: "Home deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete home" });
  }
};