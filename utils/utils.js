import dayjs from 'dayjs'
export default {
	// 校验手机号
	isPhoneAvailable(phone) {
		let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		if (!myreg.test(phone)) {
			return false;
		} else {
			return true;
		}
	},
	// 截取省、市、区
	addressard(address) {
		let obj = {}
		let reg = /(.*?省|.*?自治区)?(.*?市|.*?自治州)?([^市区县]+?市|.*?区|.*?县)/;
		let arr = address.match(reg).slice(1, 4).filter(Boolean);
		obj.province = arr[0]
		obj.city = arr[1]
		obj.area = arr[2]
		return obj;
	},
	inputInt(value) {
		if (!/^\+?[1-9][0-9]*$/.test(value)) {
			return 0
		}
		if (value < 500) {
			return 2
		}
		return 1
	},
	getNearestFutureTime(dateArray) {
		const currentTime = dayjs().format("YYYY-MM-DD");
		const futureTimes = [];

		for (const dateString of dateArray) {
			if (dateString >= currentTime) {
				futureTimes.push(dateString);
			}
		}
		if (futureTimes.length > 0) {
			const nearestTime = futureTimes[0];
			const timeDiff = dayjs(nearestTime).diff(currentTime, 'day')
			if (timeDiff <= 2) {
				return nearestTime;
			} else {
				return dayjs().add(2, 'day').format("YYYY-MM-DD");
			}
		} else {
			return null;
		}
	},
}