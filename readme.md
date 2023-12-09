# Axe API

This is an [Axe API](https://axe-api.com/getting-started/introduction/) project.

## Usage

```
$ npm install
$ npm run start:dev
```

## Benchmark

#### Custom endpoint

- No Axe API magic.
- Roting a custom `http` handler function directly.
- Fetching the same user.
- No cache

```bash
scenarios: (100.00%) 1 scenario, 50 max VUs, 2m30s max duration (incl. graceful stop):
           * default: Up to 50 looping VUs for 2m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


     ✓ status is 200

     checks.........................: 100.00% ✓ 73529      ✗ 0
     data_received..................: 43 MB   357 kB/s
     data_sent......................: 2.8 MB  23 kB/s
     http_req_blocked...............: avg=36.45µs min=0s      med=0s      max=118.2ms  p(90)=1µs     p(95)=1µs
     http_req_connecting............: avg=12.87µs min=0s      med=0s      max=24.9ms   p(90)=0s      p(95)=0s
   ✓ http_req_duration..............: avg=66.33ms min=32.53ms med=61.91ms max=6.61s    p(90)=90.4ms  p(95)=111.92ms
       { expected_response:true }...: avg=66.33ms min=32.53ms med=61.91ms max=6.61s    p(90)=90.4ms  p(95)=111.92ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 73529
     http_req_receiving.............: avg=127.2µs min=6µs     med=33µs    max=65.85ms  p(90)=101µs   p(95)=516µs
     http_req_sending...............: avg=40.61µs min=7µs     med=33µs    max=5.33ms   p(90)=70µs    p(95)=89µs
     http_req_tls_handshaking.......: avg=22.54µs min=0s      med=0s      max=100.79ms p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=66.17ms min=32.47ms med=61.74ms max=6.61s    p(90)=90.19ms p(95)=111.72ms
     http_reqs......................: 73529   612.483888/s
     iteration_duration.............: avg=66.51ms min=32.6ms  med=62.07ms max=6.61s    p(90)=90.68ms p(95)=112.27ms
     iterations.....................: 73529   612.483888/s
     vus............................: 26      min=2        max=50
     vus_max........................: 50      min=50       max=50


running (2m00.1s), 00/50 VUs, 73529 complete and 0 interrupted iterations
default ✓ [======================================] 00/50 VUs  2m0s
```

#### `SHOW` handler without cache

- Axe API handles the request.
- Fetching the same user.
- No cache

```bash
scenarios: (100.00%) 1 scenario, 50 max VUs, 2m30s max duration (incl. graceful stop):
           * default: Up to 50 looping VUs for 2m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


     ✓ status is 200

     checks.........................: 100.00% ✓ 107344     ✗ 0
     data_received..................: 63 MB   514 kB/s
     data_sent......................: 4.1 MB  34 kB/s
     http_req_blocked...............: avg=25.52µs  min=0s      med=0s      max=76.97ms p(90)=1µs     p(95)=1µs
     http_req_connecting............: avg=9.17µs   min=0s      med=0s      max=45.8ms  p(90)=0s      p(95)=0s
   ✓ http_req_duration..............: avg=45.4ms   min=30.79ms med=41.3ms  max=16.72s  p(90)=53.96ms p(95)=71.4ms
       { expected_response:true }...: avg=45.4ms   min=30.79ms med=41.3ms  max=16.72s  p(90)=53.96ms p(95)=71.4ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 107344
     http_req_receiving.............: avg=151.31µs min=6µs     med=38µs    max=75.46ms p(90)=114µs   p(95)=609µs
     http_req_sending...............: avg=44.25µs  min=6µs     med=36µs    max=14.39ms p(90)=69µs    p(95)=88µs
     http_req_tls_handshaking.......: avg=15.7µs   min=0s      med=0s      max=44.87ms p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=45.2ms   min=30.67ms med=41.13ms max=16.72s  p(90)=53.68ms p(95)=70.76ms
     http_reqs......................: 107344  878.506958/s
     iteration_duration.............: avg=45.58ms  min=31ms    med=41.46ms max=16.72s  p(90)=54.17ms p(95)=72.1ms
     iterations.....................: 107344  878.506958/s
     vus............................: 1       min=1        max=50
     vus_max........................: 50      min=50       max=50


running (2m02.2s), 00/50 VUs, 107344 complete and 0 interrupted iterations
default ✓ [======================================] 00/50 VUs  2m0s
```
