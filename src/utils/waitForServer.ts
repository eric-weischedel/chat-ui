const { REACT_APP_CHAT_SERVER_URL } = process.env;

export default async function waitForServer(): Promise<void> {
  try {
    const response = await fetch(REACT_APP_CHAT_SERVER_URL, {
      method: 'GET',
    });
    if (!response.ok) {
      console.debug(JSON.stringify(response));
      throw new Error(`Received error from server: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error connecting to server: ${error}`);
    throw new Error(error);
  }

  console.debug('Server is up.');
}
