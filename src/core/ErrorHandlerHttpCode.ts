export const STATUS_CODE: any = {
    401: "کاربری بااین مشخصات یافت نشد",
    402: "اطلاعات ارسالی ناقص می باشد",
    404: "آدرس مورد نظر یافت نشد",
    422: "داده های اجباری را وارد نمایید",
    500: "اشکال در ارتباط با سرور",
};

export const GetMessagesError = (error: any) => {
     const errorMessages = error?.response?.data?.errors;
    if (errorMessages) {
        const arrayMessages = Object.entries(errorMessages);
        const messages = arrayMessages?.map((item) => item[1])?.flat(2);
        return messages;
    } else if (error?.response?.data?.message) {
        const errorMessages = error?.response?.data?.message;
        return [errorMessages];
    } else if (error?.response?.status === undefined) {
        const errorMessages = "خطای شبکه (اتصال به اینترنت ,...)";
        return [errorMessages];
    }
    {
        const statusCode = error?.response?.status;
        const errorMessages = STATUS_CODE[statusCode] || `خطای ${statusCode} `;
        return [errorMessages];
    }
};
