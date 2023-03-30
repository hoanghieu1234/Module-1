<!-- Bài 1: Mô tả thuật toán trung bình -->
BEGIN
    INPUT Math, Physics,Chemistry
        Average = (Math + Physics + Chemistry) / 3 
    DISPLAY Average
END

<!-- Bài 2: Mô tả thuật toán chuyển đổi tiền tệ -->
BEGIN 
    INPUT $
        VND = $ * 23000
    DISPLAY VND
END
<!-- Bài 3: Mô tả thuật toán tìm giá trị lớn nhất trong 3 số -->
BEGIN 
    INPUT A B C
        IF (A > B) && (A > C)
            DISPLAY A LÀ SỐ LỚN NHẤT
        ELSE IF (A < B) && (B > C)
            DISPLAY B LÀ MAX
        ELSE 
            DISPLAY C
END
<!-- Bài 4: Mô tả thuật toán tìm giá trị lớn nhất trong một dãy số -->  
BEGIN 
    INPUT N  a1,a2,a3...aN
        a1 = max ,i = 0
        While (i < n)
        do if (ai > max)
            ai = max
            i = i + 1
            END if
            i = i + 1
END
<!-- Bài 5:  -->
BEGIN 
    INPUT N
    IF (N >= 75)
        DISPLAY :LOẠI A
        ELSE IF (N>=60)
        DISPLAY: LOẠI B
        ELSE IF (N >= 45)
        DISPLAY: LOẠI C
        ELSE IF (N => 35)
        DISPLAY: LOẠI D
        ELSE
        DISPLAY: LOẠI E

  <!-- BÀI 6: NĂM NHUẬN VÀ KO NHUẬN  -->
  BEGIN
    INPUT YEAR
    IF (YEAR % 4 == 0 && YEAR % 100 != 0) 
    DISPLAY: NĂM NHUẬN
    ELSE IF (YEAR % 100 == 0 && YEAR % 400 !=0)
    DISPLAY: NĂM KHÔNG NHUẬN
    ELSE IF (YEAR % 400 == 0 && YEAR % 100 ==0)
    DISPLAY: NĂM NHUẬN
END