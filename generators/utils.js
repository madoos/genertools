const checkEmpty = value => {
    if (!value) {
        return `Empty value is not allowed!`;
    }
    return true;
};
const acceptFiles = files => (_, __, file) => files.includes(file);
const rejectFiles = files => (_, __, file) => !files.includes(file);

module.exports = {
    checkEmpty,
    acceptFiles,
    rejectFiles
};
