import moment from "moment";

const formatDate = (date: Date) => {
    return moment(date).format("DD/MM/YYYY")
};

export default formatDate;