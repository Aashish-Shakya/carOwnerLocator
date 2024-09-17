import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66e329da001596f7ddee'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
export const database = new Databases(client);