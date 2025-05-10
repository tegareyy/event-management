import prisma from "../../lib/prisma";

class Service {
  async fetchUserByEmail(email: string) {
    return await prisma.user.findFirst({
      where: {
        email,
        is_deleted: false,
      },
    });
  }
}

export const UserService = new Service();
