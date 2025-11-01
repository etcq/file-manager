
export const parseCommand = (chunk) => {
  const input = chunk.toString().trim();
  const delimiterIndex = input.indexOf(' ');
  if (delimiterIndex === -1) {
    return { command: input };
  } 
  return {command: input.slice(0, delimiterIndex), arg: input.slice(delimiterIndex + 1) };
};
