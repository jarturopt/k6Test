
export const thresholdsSla = {
    http_req_duration: ['p(95)<100'],
    http_req_duration: ['max<2000'],
    http_req_failed: ['rate<0.1'],
    http_reqs: ['count<cls20'],
    http_reqs: ['rate>4'],
    vus: ['value>4'],
    checks: ['rate>=0.99']
};

