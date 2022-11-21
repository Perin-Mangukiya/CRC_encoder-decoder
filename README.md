# CRC_encoder-decoder
It is a website which shows the encoded and decoded binary data based on binary input given. It uses Cyclic Redundancy Check code(CRC) algorithm which is used
to detect errors during transmission of data in communication channel. CRC is based on division algorithm and technology used is HTML, CSS and Javascript. It shows
various details of in tabulation form on giving data and key for encoding, codeword and key for decoding.

## Cyclic Redundancy Check code

![Screenshot 2022-11-21 194718](https://user-images.githubusercontent.com/79306200/203077408-d978635a-694a-4f1c-9718-7abbb6ab954b.png)<br>
The input is given as dataword and key. Also, n-1 (n=key length) 0's is concatenated with dataword and is divided with key using division algorithm. The 
dataword when concatenated with remainder forms codeword, which is passed through communication channel.


![12](https://user-images.githubusercontent.com/79306200/203079008-e3d198f8-f159-46f4-90c2-c624deaa20dc.png)<br>
Error is detected in the data if on dividing codeword with key we get remainder n-1 (n=length of key) 0's than there is no error in data, any other remainder shows
presence of error in the data passed.<br>


**Home Page**
![sr1](https://user-images.githubusercontent.com/79306200/203082453-9310d040-719c-4e2f-aedc-2d6f49fba99f.png)
## Encoder
![sr2](https://user-images.githubusercontent.com/79306200/203092480-ac860cb1-98e8-4b59-859f-18174538b563.png)
![sr3](https://user-images.githubusercontent.com/79306200/203092596-d80d6ce3-9af5-4a7d-8d46-f9700dfbd2bb.png)

## Decoder
![sr4](https://user-images.githubusercontent.com/79306200/203092616-131caf9a-3fd3-49b4-9e7c-fd8d6168a6b5.png)
![sr5](https://user-images.githubusercontent.com/79306200/203092628-90e561c7-e57e-4a96-b4c3-6b37278b2754.png)
