export const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

export const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const CONNECTION_ERROR_MSG = {
  unable_to_connect_to_database: "Unable to connect to database: ",
};

export const Limit = 10;

export const ACCOUNT_TYPE = {
  user: "user",
  admin: "admin",
};
export const EMAIL_SENT = "Email sent successfully.";

export const IS_ACTIVE = {
  is_active: true,
  is_not_active: false,
};
export const UserStatus = {
  ACTIVE: "1",
  INACTIVE: "0",
};

export const CONST_DATA = {
  local: "local",
  error: "error",
  limit: "5mb",
};

export const DOCS = "_doc";

export const API_RESPONSE_MSG = {
  email_already_exist: "email_already_exist",
  email_not_sent: "email_not_sent",
  user_not_created: "user_not_created",
  verification_code_sent: "verification_code_sent",
  otp_not_match: "otp_not_match",
  user_saved_successfully: "user_saved_successfully",
  restaurants_fetch_success: "restaurants_fetch_success",
  no_restaurant_found: "no_restaurant_found",
  main_category_fetch_success: "main_categorys_fetch_success",
  no_main_category_found: "no_main_category_found",
  category_fetch_success: "categorys_fetch_success",
  no_category_found: "no_category_found",
  user_loggedin_successfully: "user_loggedin_successfully",
  pass_did_not_match: "pass_did_not_match",
  items_fetch_success: "items_fetch_success",
  no_items_found: "no_items_found",
  password_not_changed: "password_not_changed",
  password_changed: "password_changed",
  not_authorize_to_reset_password: "not_authorize_to_reset_password",
  user_not_saved: "user_not_saved",
  signup_error: "signup_error",
  failed: "failed",
  user_not_exist: "user_not_exist",
  user_blocked_by_admin: "user_blocked_by_admin",
  wrong_password: "wrong_password",
  pass_not_match_currentpass: "pass_not_match_currentpass",
  login_failed: "login_failed",
  login_successful: "login_successful",
  login_error: "login_error",
  user_list_fetch_success: "user_list_fetch_success",
  payment_list_fetch_success: "payment_list_fetch_success",
  user_fetch_success: "user_fetch_success",
  user_count_fetch_success: "user_count_fetch_success",
  total_payment_fetch_success: "total_payment_fetch_success",
  bad_request: "bad_request",
  user_profile_update_success: "user_profile_update_success",
  otp_verifcation_successful: "otp_verifcation_successful",
  user_image_updated_success: "user_image_updated_successfully",
  contact_admin_error: "Contact Admin Error",
  update_profile_image: "Update User Profile Image Error",
  email_sent_successfully: "email_sent_successfully",
  profile_update_error: "profile_update_error",
  presigned_url_success: "got_the_presigned_url_successfully",
  presigned_url_failed: "presigned_url_failed",
  profile__image_update_error: "profile_image_update_error",
  plans_fetch_success: "plans_fetch_success",
  no_plan_found: "no_plan_found",
  plan_insert_success: "plan_insert_success",
  change_password_error: "change_password_error",
  current_payment_fetch_success: "current_payment_fetch_success",
  current_payment_not_found: "current_payment_not_found",
  no_payment_found: "no_payment_found",
  payment_created_success: "payment_created_success",
  payment_not_created: "payment_not_created",
  pass_confirm_pass_not_matched: "password_not_matched_with_confirm_password",
  user_not_registered: "user_not_registered",
  verify_code_sent_success: "verify_code_sent_success",
  something_went_wrong: "something_went_wrong",
  verify_code_not_match: "verify_code_not_match",
  user_registered_success: "user_registered_success",
  user_image_not_updated: "user_image_not_updated",
  failed_fetching_payment_details: "Failed to fetch payment details",
  user_created_success: "user_created_success",
  user_not_found: "User not found",
  user_not_registered_with_stripe: "user_not_registered_with_stripe",
  user_not_verified: "user_not_verified",
  user_not_active: "user_not_active",
  payment_intent_create_success: "payment_intent_create_success",
  payment_intent_create_failed: "payment_intent_create_failed",
  free_plan_add_success: "free_plan_add_success",
  free_plan_add_failed: "free_plan_add_failed",
  plan_not_found: "plan_not_found",
  unexpected_event_type: "unexpected_event_type",
  webhook_success_payment_updated: "webhook_success_payment_updated",
  failed_to_process_payment: "failed_to_process_payment",
  session_expired_login_again: "YOUR SESSION HAS EXPIRED. PLEASE LOGIN AGAIN.",
  file_download_success: "file_download_success",
  user_status_update_success: "user_update_success",
  invalid_payment_intent_id: "invalid_payment_intent_id",
  charge_info_not_found: "charge_info_not_found",
  weekly_goal_count_success: "weekly_goal_count_success",
  weekly_goal_count_success_error: "weekly_goal_count_success_error",
  personal_stats_data_success: "personal_stats_data_success",
  personal_stats_data_error: "error",
  user_exam_not_created: "user_exam_not_created",
  user_exam_created_successfully: "user_exam_created_successfully",
  narration_not_exist: "narration_not_exist",
  exam_already_exists: "exam_already_exists",
  lowest_score_success: "lowest_score_success",
  lowest_score_error: "lowest_score_error",
  question_category_score_fetch_success:
    "question_category_score_fetch_success",
  question_category_score_fetch_error: "question_category_score_fetch_error",
  news_letter_already_subscribed: "news_letter_already_subscribed",
  news_letter_subscribed_success: "news_letter_subscribed_success",
  updated_time_fetch_success: "updated_time_fetch_success",
  trending_plan_found: "trending_plan_found",
  exam_taken_details_found: "exam_taken_details_found",
  exam_taken_details_error: "exam_taken_details_error",
  year_error: "year_error",
  year_found: "year_found",
};

export const ROUTES = {
  SIGN_UP: "/sign-up",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  OTP_VERIFICATION: "/otp-verification",
  RESET_PASSWORD: "/reset-password",
  GET_USER_LIST: "/get-user-list",
  GET_PAYMENT_LIST: "/get-payment-list",
  GET_USER: "/get-user/:id",
  UPDATE_USER: "/update-user",
  GET_USER_COUNT: "/get-user-count",
  GET_TOTAL_PAYMENT: "/get-total-payment",
  GOOGLE_LOGIN: "/google-login",
  CREATE_PAYMENT_INTENT: "/create-payment-intent",
  WEBHOOK: "/webhook",
  EDIT_PROFILE: "/edit-profile",
  GET_PRESIGNED_URL: "/pre-signed-url",
  EDIT_PROFILE_IMAGE: "/edit-profile-image",
  CHANGE_PASSWORD: "/change-password",
  CONTACT_ADMIN: "/contact-admin",
  NEWS_LETTER: "/news-letter",
  GET_QUESTION_CATEGORIES: "/get-question-categories",
  INSERT_CATEGORIES: "/insert-categories",
  INSERT_PLANS: "/insert-plans",
  GET_PLANS: "/get-plans",
  GET_EXAM_SETS: "/get-exam-sets",
  GET_ATTEMPT_SCORE: "/get-attempt-score",
  GET_EXAMS_LIST: "/get-exam-list/:id",
  GET_NARRATIVES_LIST: "/get-narratives-list/:id",
  GET_NARRATIVE: "/get-narrative/:id",
  ADD_EXAM_SETS: "/add-exam-sets",
  ADD_EXAMS: "/add-exams",
  CREATE_PAYMENT: "/create-payment",
  GET_CURRENT_PAYMENT: "/get-current-payment",
  GET_USER_PAYMENT_HISTORY: "/get-user-payment-history",
  GET_EXAM_TAKEN_GRAPH_DETAILS: "/exam-taken",
  GET_MONTH_YEAR: "/month-year",
  GET_USER_WEEKLY_GOALS: "/weekly-goals",
  GET_LOWEST_SCORE: "/lowest-score/:userId",
  GET_PERSONAL_STATS: "/personal-stats/:userId",
  OVERALL_PROGRESS: "/overall-progress",
  ADD_USER_EXAM: "/add-user-exam",
  ADD_NARRATION: "/add-narration",
  GET_SESSIONS_AND_QUESTIONS: "/get-sessions-and-questions/:id/:examId",
  GET_EXAM_ANSWER_OPTIONS: "/get-exam-answer-options/:id",
  GET_USER_EXAM_QUESTIONS_COUNT: "get-user-exam-questions-count",
  GET_USER_EXAM_RESULT: "/get-user-exam-result",
  GET_USER_EXAM_QUESTIONS: "/get-user-exam-questions",
  GET_QUESTION_OPTIONS_AND_ANSWER: "/get-question-options-and-answer",
  GET_QUESTION_CATEGORY_SCORE: "/get-question-category-score",
  ADD_USER_EXAM_ANSWER: "/add-user-exam-answer",
  GET_LAST_UPDATED_TIME: "/get-last-updated-time",
  GET_CATEGORY_WISE_PERFORMANSE: "/get-category-wise-performance",
  CHECK_ACTIVE_PLAN: "/check-active-plan",
  GET_TRENDING_PLAN: "/get-trending-plan",
};

export const LABELS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  accountType: "Account Type",
  otpVerificationType: "OTP Verification Type",
  password: "Password",
  confirm_password: "Confirm Password",
  phone: "Phone",
  otp: "OTP",
  encOtp: "Encrypted OTP",
  message: "Message",
  image: "Image",
  new_password: "New Password",
  current_password: "Current Password",
  goal: "Goal",
  date: "Date",
  stressLevel: "Stress Level",
  state: "State",
  city: "City",
  zipCode: " Zip Code",
  addressLineOne: "Address Line 1",
  addressLineTwo: "Address Line 2",
  hour_24: "24h",
  signup: "signup",
  succeeded: "succeeded",
  usd: "usd",
  FREE_PLAN_ID: "free-plan",
  planId: "Plan Id",
  amount: "Amount",
  id: "Id",
  active: "Active/Inactive Status",
  name: "Name",
  status: "Status",
};

export const MAIL = {
  OTP_SUBJECT: "NextLPC Account Verification Code",
  OTP_HEADING: "Verification Code",
  SIGNUP_OTP_EMAIL_TEMPLATE: "../../utils/templates/SignUpCode.ejs",
  FRGT_PASS_OTP_EMAIL_TEMPLATE: "../../utils/templates/ForgotPasswordCode.ejs",
  PROJECT_TITLE: "Next LPC",
  THANK_YOU: "Thank you",
  CONTACT_US_SUBJECT: "Next LPC - Discover Us",
  CONTACT_US_HEADING: "Contact To Admin",
  CONTACT_US_EMAIL_TEMPLATE: "../../utils/templates/ContactUs.ejs",
};

export const STATUS = {
  PENDING: "pending",
  SUCCEED: "succeed",
  FAILED: "failed",
};

export const ADMIN_EMAIL = "nextlpc@mailinator.com";

export const PlanDetails = [
  {
    name: "Free",
    details:
      "3 Free Simulations with personalized strength and weakness analysis",
    price: 0.0,
    status: true,
    duration: {
      unit: "m",
      limit: 1,
    },
    features: {
      "3-free-simulations": true,
      "ai-assisted-tutoring": false,
      "full-access-without-tutoring": false,
    },
  },
  {
    name: "AI-Assisted Tutoring",
    details:
      "Receive AI-assisted tutoring. Every session provides individualized coaching on the NCMHCE format, testing tips, and testing strategies to set you up for success.",
    price: 60.0,
    status: true,
    duration: {
      unit: "m",
      limit: 1,
    },
    features: {
      "3-free-simulations": false,
      "ai-assisted-tutoring": true,
      "full-access-without-tutoring": false,
    },
  },
  {
    name: "1 Month",
    details: "1 Month of full access to the entire site. (except tutoring)",
    price: 59.97,
    status: true,
    duration: {
      unit: "m",
      limit: 1,
    },
    features: {
      "3-free-simulations": false,
      "ai-assisted-tutoring": false,
      "full-access-without-tutoring": true,
    },
  },
  {
    name: "2 Months",
    details: "2 Months of full access to the entire site. (except tutoring)",
    price: 99.97,
    status: true,
    duration: {
      unit: "m",
      limit: 2,
    },
    features: {
      "3-free-simulations": false,
      "ai-assisted-tutoring": false,
      "full-access-without-tutoring": true,
    },
  },
  {
    name: "3 Months",
    details: "3 Months of full access to the entire site. (except tutoring)",
    price: 149.97,
    status: true,
    duration: {
      unit: "m",
      limit: 3,
    },
    features: {
      "3-free-simulations": false,
      "ai-assisted-tutoring": false,
      "full-access-without-tutoring": true,
    },
  },
  {
    name: "4 Months",
    details: "4 Months of full access to the entire site. (except tutoring)",
    price: 197.97,
    status: true,
    duration: {
      unit: "m",
      limit: 4,
    },
    features: {
      "3-free-simulations": false,
      "ai-assisted-tutoring": false,
      "full-access-without-tutoring": true,
    },
  },
  {
    name: "6 Months",
    details: "6 Months of full access to the entire site. (except tutoring)",
    price: 259.97,
    status: true,
    duration: {
      unit: "m",
      limit: 6,
    },
    features: {
      "3-free-simulations": false,
      "ai-assisted-tutoring": false,
      "full-access-without-tutoring": true,
    },
  },
  {
    name: "12 Months",
    details: "12 months of full access to the entire site. (except tutoring)",
    price: 397.97,
    status: true,
    duration: {
      unit: "m",
      limit: 12,
    },
    features: {
      "3-free-simulations": false,
      "ai-assisted-tutoring": false,
      "full-access-without-tutoring": true,
    },
  },
];

export const EXAM_SET_ARRAY = [
  {
    name: "Set 01",
  },
  {
    name: "Set 02",
  },
  {
    name: "Set 03",
  },
  {
    name: "Set 04",
  },
  {
    name: "Set 05",
  },
  {
    name: "Set 06",
  },
  {
    name: "Set 07",
  },
  {
    name: "Set 08",
  },
  {
    name: "Set 09",
  },
  {
    name: "Set 10",
  },
];
export const PAYMENT_STATUS = {
  PENDING: "pending",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
  PROCESSING: "processing",
};

export const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
