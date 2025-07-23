import { CreateUserType } from "@src/schemas/create-user.schema";
import axios, { AxiosInstance } from "axios";

class ApiClient {
  protected readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async createUser(body: CreateUserType): Promise<any> {
    try {
      const response = await this.client.post<CreateUserType>("/v2/user", body);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw new Error("Unexpected error occurred");
    }
  }
}

export default ApiClient;
