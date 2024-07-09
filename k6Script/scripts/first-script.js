import http from 'k6/http';
import { sleep } from 'k6';
import exec from 'k6/execution';

export const options = {
    vus: 1,
    duration: '8s'
}



export default function () {
    http.get('http://test.k6.io');

    sleep(1);
}
