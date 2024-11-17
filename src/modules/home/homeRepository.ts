import mongoose from "mongoose";
import Home, { HomeModelDocument } from "../../models/homeModel";

// Check if a Home exists
export const doesHomeExist = async (): Promise<boolean> => {
  const count = await Home.countDocuments();
  return count > 0;
};

export const createHome = async (
  homeData: Partial<HomeModelDocument>
): Promise<HomeModelDocument> => {
    const home = new Home(homeData);
    return await home.save();
};

export const getHome = async():Promise<HomeModelDocument[]>=>{
 return await Home.find();   
}

export const getHomeById = async (id: string): Promise<HomeModelDocument | null> => {
  return await Home.findById(id);
};
export const updateHomeById = async (
  id: string,
  homeData: Partial<HomeModelDocument>
): Promise<HomeModelDocument | null> => {
  return await Home.findByIdAndUpdate(id, homeData, { new: true });
};

export const deleteHomeById = async (id: string): Promise<HomeModelDocument | null> => {
  return await Home.findByIdAndDelete(id);
};