'use strict';
/**
 * @module cash
 * @requires got
 * @requires money
 * @requires chalk
 * @requires ora
 * @author Dou Zhuo
 */
const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');

/**
 * @file  currencies list
 */
const currencies = require('../lib/currencies.json');
/**
 * @requires  Add the default configuration
 */
const {API} = require('./constants');

/**
 * @description Accept command line parameters for exchanging rate conversion
 * @param {Object} command - instruction
 * @param {number} command.amount - amount
 * @param {string} command.from - Currency to be converted
 * @param {string[]} command.to - Target currencies
 * @returns {Promise<void>}
 */
const cash = async command => {
    /**
     * @type {number}
     */
	const {amount} = command;
    /**
     * @type {string}
     */
	const from = command.from.toUpperCase();
    /**
     * @type {string[]}
     */
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());

    /**
     * @type {Ora}
     */
	const loading = ora({
		text: 'Converting...',
		color: 'green',
		spinner: {
			interval: 150,
			frames: to
		}
	});

	loading.start();

    /**
     * @function use 'got' to get currencies list from api
     */
	await got(API, {
		json: true
	})
    /**
     * @callback return API response
     */
        .then(response => {

		money.base = response.body.base;
		money.rates = response.body.rates;
		to.forEach(item => {
			if (currencies[item]) {
			    // console.log(amount);
			    // console.log({from, to: item});
                try {
                    /**
                     * here may cause an error because item may be in json but not in API list
                     */
                    loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(3))} ${`(${item})`} ${currencies[item]}`);

                }catch (e) {
                    loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
                }

			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});

		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
	}).catch(error => {
		if (error.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red(`Internal server error :(\n${error}`));
		}
		process.exit(1);
	});
};

module.exports = cash;
