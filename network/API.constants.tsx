import { Verify } from "crypto";

// import ENV from '../../env.json'
const BASE_URL = "https://matlas-xi.vercel.app/api";
// const BASE_URL = "http://localhost:7438/api";
export const API_KEYS: Record<string, string> = {
  TEST: "test",
};

type FetchFunction = (...params: any[]) => string;

/**
 * API_ENDPOINTS represents the endpoints for various API calls.
 */
/**
 * @constant
 * @name API_ENDPOINTS
 * @description This constant object contains various API endpoint functions for the application. Each key represents a specific API endpoint, and the corresponding value is a function that returns the full URL for that endpoint. The endpoints cover functionalities such as fetching plan features, getting IP address, user plan registration, OTP verification, coupon application and removal, order payment retry, order cancellation, plan change for orders, and updating order status.
 *
 * @property {Function} PLANS_FEATURES - Returns the URL for fetching plan features.
 * @property {Function} GET_IP - Returns the URL for fetching the user's IP address.
 * @property {Function} USER_INFO_PLAN - Returns the URL for user plan registration.
 * @property {Function} OTP_VERIFY - Returns the URL for OTP verification.
 * @property {Function} RESEND_OTP - Returns the URL for resending OTP.
 * @property {Function} APPLY_COUPON - Returns the URL for applying a coupon to an order.
 * @property {Function} REMOVE_COUPON - Returns the URL for removing a coupon from an order.
 * @property {Function} RETRY_ORDER_PAYMENT - Returns the URL for retrying order payment.
 * @property {Function} CANCEL_ORDER - Returns the URL for cancelling an order.
 * @property {Function} CHANGE_PLAN_FOR_ORDER - Returns the URL for changing the plan for an order.
 * @property {Function} UPDATE_ORDER_STATUS - Returns the URL for updating the status of an order.
 * @property {Function} GET_ORDER - Returns the URL for fetching details of a specific order by order ID.
 */
/**
 * A collection of API endpoint functions.
 * Each function returns a URL string for a specific API endpoint.
 *
 * @constant
 * @type {Record<string, FetchFunction>}
 *
 * @property {FetchFunction} PLANS_FEATURES - Endpoint to get features of plans.
 * @property {FetchFunction} GET_IP - Endpoint to get the public IP address.
 * @property {FetchFunction} USER_INFO_PLAN - Endpoint to register user information for a plan.
 * @property {FetchFunction} OTP_VERIFY - Endpoint to verify OTP.
 * @property {FetchFunction} RESEND_OTP - Endpoint to resend OTP.
 * @property {FetchFunction} APPLY_COUPON - Endpoint to apply a coupon to an order.
 * @property {FetchFunction} REMOVE_COUPON - Endpoint to remove a coupon from an order.
 * @property {FetchFunction} RETRY_ORDER_PAYMENT - Endpoint to retry payment for an order.
 * @property {FetchFunction} CANCEL_ORDER - Endpoint to cancel an order.
 * @property {FetchFunction} CHANGE_PLAN_FOR_ORDER - Endpoint to change the plan for an order.
 * @property {FetchFunction} UPDATE_ORDER_STATUS - Endpoint to update the status of an order.
 * @property {FetchFunction} GET_ORDER - Endpoint to get details of an order by its ID.
 *
 * @example
 * // Usage
 * const plansFeaturesUrl = API_ENDPOINTS.PLANS_FEATURES();
 * const userIpUrl = API_ENDPOINTS.GET_IP();
 */
export const API_ENDPOINTS: Record<string, FetchFunction> = {
  GET_IP: () => `https://api64.ipify.org?format=json`,
  CHECK_DOMAIN: () => `${BASE_URL}/user/domain/`,
  EMAIL_PASSWORD_LOGIN: () => `${BASE_URL}/user/auth/login`,
  OTP_LOGIN: () => `${BASE_URL}/user/auth/login-otp`,
  RECENT_OTP: () => `${BASE_URL}/user/auth/resend-otp`,
  Verify_OTP: () => `${BASE_URL}/user/auth/verify-otp`,
  AUTH_ME: () => `${BASE_URL}/user/auth/me`,
};
