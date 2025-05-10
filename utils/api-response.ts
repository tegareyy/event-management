import { Response } from "express";

interface ISuccesRespone {
  res: Response;
  data: any;
  pagination?: {
    page_size: number;
    page: number;
    total_pages: number;
    total_items: number;
  };
}

interface IError {
  res: Response;
  message: string;
  statusCode?: number;
  error?: any;
}

export const SuccessResponse = ({ res, data, pagination }: ISuccesRespone) => {
  return res.status(200).json({
    code: 200,
    status: `Success`,
    data,
    pagination,
  });
};

export const ErrorRespone = ({ res, error = null, message = "Internal Server Error", statusCode = 500 }: IError) => {
  return res.status(statusCode).json({
    code: statusCode,
    status: "Error",
    message,
    error,
  });
};
