# # wifi-probe

FastConnect is a Node.js application that automates the process of connecting to the fastest available Wi-Fi network on your MacBook. By utilizing the Airport and networksetup interfaces, the app scans for network SSIDs, tests the speed of each SSID using the Fast.com API, and automatically connects to the fastest network.

> Backstory: 

This service was birthed out of internet frustration. I had 5 routers, 8 SSIDs with terrible internet connection and i had to always manually connect to each on to check for the fastest everytime i needed internet. Then i automated it.

## Prerequisites

Before running this application, please ensure that you have the following:

- Node.js
- Macbook with macOS
- Active internet connection

## Installation

1. Clone or download this repository to your local machine.
2. Navigate to the root directory of the application.
3. Install the required dependencies by running `npm install`


## Usage

1. Open a terminal window and navigate to the root directory of the application.
2. Run the following command to start the application:

`node indes.js`


The app will initiate the scanning process, test the speeds of available network SSIDs, and automatically connect to the fastest network.

**Note:** 

1. Please ensure that you have the necessary permissions to control the Wi-Fi settings on your MacBook. 

2. You may also need to provide administrator access. 

3. You may need to modify the `returnMySsids` function to filter just your SSIDs

4. This currently would work if all SSIDs uses the same password. {this was my case, will modify it later :) }

5. Sit back and let FastConnect handle the Wi-Fi connection for you!




