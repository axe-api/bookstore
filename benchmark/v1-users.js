import http from "k6/http";
import { check } from "k6";

export let options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "1m", target: 50 },
    { duration: "30s", target: 25 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"],
  },
};

export default function () {
  // Make a GET request to your API endpoint
  let response = http.get("https://bookstore.axe-api.com/api/v1/users/1");

  // Check if the request was successful (status code 200)
  check(response, {
    "status is 200": (r) => r.status === 200,
  });
}
