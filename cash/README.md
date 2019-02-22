# cash
**Table of Contents**
- [Introduction](#introduction)
- [How to install](#how-to-install)
  - [requirement](#requirement)
  - [install](#install)
    - [download the project](#download-the-project)
    - [install using npm](#install-using-npm)
- [How to use it](#how-to-use-it)
  - [default currency conversion](#default-currency-conversion)
  - [modify the default currency](#modify-the-default-currency)
  - [conversion of specified values](#conversion-of-specified-values)

## Introduction 
![conversion](https://github.com/dz269375933/3-musketeers/blob/master/slides/dzlogo.jpg)

This is an exchange rate conversion software that helps you convert exchange rates based on real-time exchange rates.             
## How to install 
### requirement
Since I only has a windows environment, this guide is based on windows command. If you are a Linux environment, you can refer to the corresponding instructions.

#### environment
*windows system, npm, nodejs, git (optional)*

If you don't know how to use npm and nodejs, you'd better search and install the environment first.Try some simple examples to help you use nodejs and npm.
### install
#### download the project
If you already have git installed on your computer and you have experience with git, you can do the following on the command line.
Run the windows command line (windows + R and input 'cmd') and go to the directory you want.
```sh
❯ cd /path/to/test
❯ git clone https://github.com/dz269375933/3-musketeers.git
```
Then the project will be automatically installed into the test folder (of course you can also modify the project path yourself).

![gitSuccess](https://github.com/dz269375933/3-musketeers/blob/master/slides/gitSuccess.png)
#### install using npm
In the test directory, go to the crash directory.
```sh
❯ cd /cash
```
Link the project to npm
```sh
❯ npm link
```
Test if the project was successfully linked
```sh
❯ cash --help
```
If successful, you will see the following

![npmlinkSuccess](https://github.com/dz269375933/3-musketeers/blob/master/slides/npmlinkSuccess.png)

## How to use it
### default currency conversion

Open the command line in any directory and enter the following command.
(First way:windows + R and input "cmd",
another way: In the blank space of the folder,Hold down shift and right click to open the command line here)
```sh
❯ cash --help
```
You can see the following.

![cashTest](https://github.com/dz269375933/3-musketeers/blob/master/slides/cashTest.png)

### modify the default currency
If you want to modify your default currency, enter the following command at the command line (set to CNY)
```sh
❯ cash -s cny
```
You can see the following.

![cashSave](https://github.com/dz269375933/3-musketeers/blob/master/slides/cashSave.png)

Enter the cash command again
```sh
❯ cash
```
![cnyCash](https://github.com/dz269375933/3-musketeers/blob/master/slides/cnyCash.png)


You can see that the default currency has been changed to CNY.

You can also modify the default currency and display currency with the -s command. The first parameter of the -s command is the default currency, and the remaining commands are the display currency. 

E.g:
```sh
❯ cash -s cny eur
```
Here, I am changing the default currency to CNY, and changing the display currency to Euro. The result is as follows:

![saveCnyEuro](https://github.com/dz269375933/3-musketeers/blob/master/slides/saveCnyEuro.png)

The list of currencies that are temporarily supported for input is as follows. If the list is not included in the following list, the following error will occur.

| ----- | ----- | ----- | ----- | ----- | ----- |
|NZD	|NOK	|BGN    |CAD	|TRY	|SGD    |
|MXN	|IDR	|RUB    |AUD	|ZAR	|RON    |
|CNY	|MYR	|CHF    |PHP	|HKD	|DKK    |
|GBP	|HUF	|INR    |CZK	|ISK	|KRW    |
|USD	|HRK	|THB    |SEK	|JPY	|BRL    |
|PLN	|ILS	|       

![error](https://github.com/dz269375933/3-musketeers/blob/master/slides/error.png)

### conversion of specified values
You can also convert by entering a specified value and currency. 

E.g:
```sh
❯ cash -s 100 eur cny usd
```
Here, the currency of the first position (CNY) is converted into another currency, as shown below:

![amountConvert](https://github.com/dz269375933/3-musketeers/blob/master/slides/amountConvert.png)

You can also enter other currencies to convert.


