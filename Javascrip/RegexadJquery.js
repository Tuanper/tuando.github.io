$('document').ready(function() {
    $('#dk').click(function(){
            var numericReg = /^[A-Z]/
            if (!numericReg.test($('#ho').val())) {
                $('#error1').html('Họ phải bắt đầu bằng chữ hoa');
            }else{
                $('#error1').html('');
            }
            var characterReg =  /^[A-Z]/
            if (!characterReg.test($('#ten').val())) {
                $('#error2').html('Tên phải bắt đầu bằng chữ hoa');
            }else{
                $('#error2').html('');
            }
            var characterReg = /^.+@.+\..+/
            if (!characterReg.test($('#email').val())) {
                $('#error3').html('Email phải đúng định dạng');
            }else{
                $('#error3').html('');
            }
            if ($('#email').val()!==$('#nlemail').val()) {
                $('#error4').html('Phải trùng ở trên');
            }else{
                $('#error4').html('');
            }
            var dateReg = /.{6,}/
            if (!dateReg.test($('#mk').val())) {
                $('#error5').html('Mật khẩu phải có ký tự chữ, số và ít nhất là 6 ký tự');
            }else{
                $('#error5').html('');
            }
    });
});