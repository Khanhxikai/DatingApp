export interface Message {
    id: number;
    senderId: number;
    senderUsername: string;
    senderPhotourl: string;
    recipientId: number;
    recipientUsername: string;
    recipientPhotoUrl: string;
    content: string;
    dataRead?: Date;
    messageSent: Date;
}