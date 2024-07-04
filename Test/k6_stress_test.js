import http from 'k6/http';
import {check, sleep, group} from 'k6'
export const options = {

    vus: 500,
    duration: "30s"
}   

export default function () {

    group('visit product listing page', function() {
        const res = http.get('http://localhost:80/products');
        check(res, {
            'status is 200': (r) => r.status === 200,
        })
    })

    group('single product listing page', function() {
        const res = http.get('http://localhost:80/products/2');
        check(res, {
            'status is 200': (r) => r.status === 200,
        })
    })

    group('product style listing page', function() {
        const res = http.get('http://localhost:80/products/1/styles');
        check(res, {
            'status is 200': (r) => r.status === 200,
        })
    })

   sleep(1);
}