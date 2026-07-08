"use server";

type RegistrationState =
  | { success: true; userId: string; error?: null }
  | { success: false; error: string; userId?: null };

export async function RegisterUser(
  previousState: RegistrationState,
  formData: FormData,
): Promise<RegistrationState> {
  try {

console.log(formData)

    return { success: true, userId: "1" };
  } catch (error) {
    console.log(error)
    return { success: false, error: "User Registration was unsuccessful!" };
  }
}
