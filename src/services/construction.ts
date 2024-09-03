export const fetchConstructionData = async (b_code: string | null, BaseURL: string) => {
  if (!b_code) {
    throw new Error('b_code is required');
  }

  const response = await fetch(`${BaseURL}/construction/get-by-searched-region?b_code=${b_code}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};
