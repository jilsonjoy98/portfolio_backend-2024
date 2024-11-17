import mongoose from "mongoose";
import * as homeRepository from "./homeRepository";
import { HomeModelDocument } from "../../models/homeModel";

// Create a single Home
export const createSingleHome = async (data: Partial<HomeModelDocument>): Promise<HomeModelDocument | null> => {
  const exists = await homeRepository.doesHomeExist();
  if (exists) {
    throw new Error("Home already exists");
  }
  return await homeRepository.createHome(data);
};

// Create a new home
// export const createHome = async (data: Partial<HomeModelDocument>): Promise<HomeModelDocument> => {
//   return await homeRepository.createHome(data);
// };
// (Other functions remain the same)

export const getAllHomes = async (): Promise<HomeModelDocument[]> => {
  return await homeRepository.getHome();
};

export const getHomeById = async (id: string): Promise<HomeModelDocument | null> => {
  return await homeRepository.getHomeById(id);
};

export const editHome = async (
  id: string,
  data: Partial<HomeModelDocument>
): Promise<HomeModelDocument | null> => {
  return await homeRepository.updateHomeById(id, data);
};

export const deleteHome = async (id: string): Promise<HomeModelDocument | null> => {
  return await homeRepository.deleteHomeById(id);
};