function create_customer_code() {
    let new_customer_name;
    let customer_code;
    while (true) {
        let customer_name = prompt('Nhập tên khách hàng để tạo mã khách hàng:');
        let customer_phone_number = prompt('Nhập số điện thoại của khách hàng:');
        let customer_ID_number = prompt('Nhập CMND/CCCD của khách hàng:');

        customer_name = customer_name ? customer_name.trim() : null;
        customer_phone_number = customer_phone_number ? customer_phone_number.trim().replace(/[^0-9]/g, '') : null;
        customer_ID_number = customer_ID_number ? customer_ID_number.trim().replace(/[^0-9]/g, '') : null;

        if (!customer_name || !customer_phone_number || !customer_ID_number) {
            alert('Một trong các thông tin nhập vào không hợp lệ. Vui lòng nhập lại thông tin.');
            continue;
        }

        if (isNaN(customer_phone_number) || customer_phone_number.length < 10) {
            alert('Số điện thoại không hợp lệ. Vui lòng nhập lại.');
            continue;
        }

        if (isNaN(customer_ID_number) || customer_ID_number.length < 12) {
            alert('CMND/CCCD không hợp lệ. Vui lòng nhập lại.');
            continue;
        }

        new_customer_name = customer_name.toUpperCase();
        let new_customer_phone_number = customer_phone_number.slice(-5);
        let new_customer_ID_number = customer_ID_number.slice(-5);
        customer_code = `TL${new_customer_phone_number}${new_customer_ID_number}`;
        break;
    }

    alert(`Mã khách hàng của ông/bà ${new_customer_name} là: ${customer_code}`);
    console.log(`${new_customer_name} là: ${customer_code}`);
}

create_customer_code();