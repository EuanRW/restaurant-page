import locationImg from "../../img/location.svg";
import scheduleImg from "../../img/schedule.svg";
import phoneImg from "../../img/phone.svg";

const createHeader = () => {
    const createDivider = () => {
        const divider = document.createElement("p");
        divider.textContent = "|";
        return divider;
    };
    
    const createLocation = () => {
        const locationIcon = document.createElement("img");
        locationIcon.src = locationImg;
        locationIcon.alt = "Location icon";

        const locationInfo = document.createElement("p");
        locationInfo.textContent = "4161 Rosewood Lane, New York NY";

        const location = document.createElement("div");
        location.append(locationIcon, locationInfo);
        return location;
    };
    
    const createSchedule = () => {
        const scheduleIcon = document.createElement("img");
        scheduleIcon.src = scheduleImg;
        scheduleIcon.alt = "Clock icon";

        const scheduleInfo = document.createElement("p");
        scheduleInfo.textContent = "Mon - Fri 12PM - 10.30PM, Weekends 10AM - 10.30PM";

        const schedule = document.createElement("div");
        schedule.append(scheduleIcon, scheduleInfo);
        return schedule;
    };

    const createPhoneNumber = () => {
        const phoneIcon = document.createElement("img");
        phoneIcon.src = phoneImg;
        phoneIcon.alt = "Phone icon";

        const phoneNumberInfo = document.createElement("p");
        phoneNumberInfo.textContent = "212-976-3476";

        const phoneNumber = document.createElement("div");
        phoneNumber.append(phoneIcon, phoneNumberInfo);
        return phoneNumber;
    };

    const address = document.createElement("address");
    address.append(
        createLocation(),
        createDivider(),
        createSchedule(),
        createDivider(),
        createPhoneNumber()
    );
    
    const header = document.createElement("header");
    header.appendChild(address);
    return header;
};

export {
    createHeader
};