export const formatPhoneNumber = (phoneNumber: string): string => {
  const regex = /\d/g;
  const numbers = phoneNumber.match(regex);
  if (numbers) {
    return `(${numbers.slice(0, 3).join("")}) ${numbers
      .slice(3, 6)
      .join("")}-${numbers.slice(6).join("")}`;
  }
  return "";
}