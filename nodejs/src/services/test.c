#include <stdio.h>

int main() {
    // Khai báo mảng dữ liệu
    float data[17][4] = {
        {8, 8.5, 8.5, 8},
        {8, 8, 7, 7},
        {8, 8.5, 8, 7.5},
        {8, 9, 7.5, 6.5},
        {9, 8.5, 8.5, 8},
        {9, 9.5, 7, 7.5},
        {8, 9, 7, 7},
        {7, 8.5, 7, 8},
        {8.5, 9, 8.5, 8.5},
        {8, 8.5, 9, 7.5},
        {9, 6, 6.5, 7.5},
        {9.5, 6, 8, 7},
        {9, 8.5, 9, 8},
        {8, 8.5, 7, 7},
        {8, 8, 7, 7.5},
        {0, 8.5, 6.5, 8},
        {0, 8.5, 6.5, 7}
    };

    int rows = 17;
    int cols = 4;
    float max_avg = 0;
    int max_row = 0;

    // Tìm dòng có điểm trung bình cao nhất
    for (int i = 0; i < rows; i++) {
        float sum = 0;
        for (int j = 0; j < cols; j++) {
            sum += data[i][j];
        }
        float avg = sum / cols;
        if (avg > max_avg) {
            max_avg = avg;
            max_row = i + 1; // Dòng bắt đầu từ 1, không phải 0
        }
    }

    // In kết quả
    printf("Dòng có điểm trung bình cao nhất là dòng %d với giá trị trung bình là %.2f\n", max_row, max_avg);

    return 0;
}