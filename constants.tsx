
import { SlideData, SlideType } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 0,
    type: SlideType.TITLE,
    title: "Thấu Hiểu Tài Chính Cá Nhân",
    subtitle: "Các Gốc Rễ Của Sự Thịnh Vượng",
    members: [
      { id: "PC09983", name: "Trần Hoàng Nhựt" },
      { id: "PC09835", name: "Nguyễn Nhựt Duy" },
      { id: "PC09851", name: "Nguyễn Huy Hoàng" },
      { id: "PC10273", name: "Quách Thanh Duy" },
      { id: "PC10288", name: "Nguyễn Quốc Khải" },
      { id: "PC10299", name: "Lê Nhật Hảo" },
    ]
  },
  {
    id: 1,
    type: SlideType.MINDMAP,
    title: "Hành Trình Kiến Tạo Thịnh Vượng",
    subtitle: "6 Gốc Rễ Nền Tảng",
    mindMapItems: [
      { id: "01", label: "Củng Cố Niềm Tin", color: "bg-purple-100 text-purple-700 border-purple-200", icon: "fa-brain" },
      { id: "02", label: "Sự Chính Trực", color: "bg-red-100 text-red-700 border-red-200", icon: "fa-shield-halved" },
      { id: "03", label: "Giá Trị Bản Thân", color: "bg-blue-100 text-blue-700 border-blue-200", icon: "fa-chart-line" },
      { id: "04", label: "Sự Hiếu Thảo", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: "fa-heart" },
      { id: "05", label: "Lòng Biết Ơn", color: "bg-indigo-100 text-indigo-700 border-indigo-200", icon: "fa-hands-praying" },
      { id: "06", label: "Sự Hào Phóng", color: "bg-green-100 text-green-700 border-green-200", icon: "fa-hand-holding-heart" },
    ]
  },
  {
    id: 2,
    type: SlideType.CONTRAST,
    title: "I. Củng Cố Niềm Tin Về Tiền Bạc",
    subtitle: "Tái lập trình tư duy & Chọn lọc thông tin",
    contrastData: {
      negative: {
        title: "Xóa bỏ (Niềm tin giới hạn)",
        items: [
          "Tư duy: 'Tiền xấu xa', 'Người giàu tham lam', 'Nghèo cho sạch'.",
          "Hệ quả: Rào cản tâm lý ngăn cản sự giàu có.",
          "Ngưng (Input): Tin tiêu cực, Drama, Ngôn tình ủy mị."
        ],
        color: "red"
      },
      positive: {
        title: "Cài đặt (Niềm tin đúng)",
        items: [
          "Tiền là TRUNG TÍNH: Công cụ phóng đại bản chất con người.",
          "Tiền là PHƯƠNG TIỆN: Giúp cuộc sống tốt hơn & phụng sự.",
          "Nạp: Sách tài chính, Podcast phát triển bản thân."
        ],
        color: "emerald"
      }
    }
  },
  {
    id: 3,
    type: SlideType.CONTRAST,
    title: "II. Sự Chính Trực",
    subtitle: "Nền móng bền vững cho sự nghiệp",
    contrastData: {
      negative: {
        title: "Dòng Tiền Đỏ (Nguy Hiểm)",
        items: [
          "Cờ bạc, lô đề.",
          "Buôn lậu, tham ô.",
          "Lừa đảo, trục lợi.",
          "Kết quả: Bất an, không bền vững."
        ],
        color: "rose"
      },
      positive: {
        title: "Dòng Tiền Xanh (Bình An)",
        items: [
          "Sức lao động chân chính.",
          "Trí tuệ và sự phục vụ.",
          "Giàu chậm nhưng chắc.",
          "Nam châm thu hút may mắn."
        ],
        color: "teal"
      }
    }
  },
  {
    id: 4,
    type: SlideType.CONTENT,
    title: "III. Giá Trị Bản Thân = Thu Nhập",
    subtitle: "Quy luật cân bằng của vũ trụ",
    imageUrl: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=2000&auto=format&fit=crop",
    sections: [
      {
        title: "Chiến Lược Hành Động",
        icon: "fa-bolt",
        color: "blue",
        items: [
          "Nâng cấp bản thân: Không ngừng học hỏi chuyên môn.",
          "Thay đổi mục tiêu: Từ 'Kiếm tiền' sang 'Trao giá trị'.",
          "Tâm thế phục vụ: Giúp càng nhiều người, thưởng tài chính càng lớn."
        ]
      }
    ]
  },
  {
    id: 5,
    type: SlideType.CONTENT,
    title: "IV. Sự Hiếu Thảo Với Cha Mẹ",
    subtitle: "Gốc rễ tâm linh của sự thịnh vượng",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
    sections: [
      {
        title: "Hòa Khí Sinh Tài",
        icon: "fa-house-chimney-heart",
        color: "orange",
        items: [
          "Cha mẹ là cội nguồn sự sống.",
          "Biết ơn cha mẹ mở lối cho dòng chảy tài lộc.",
          "Gia đình hòa thuận là môi trường phong thủy tốt nhất."
        ]
      }
    ]
  },
  {
    id: 6,
    type: SlideType.CONTENT,
    title: "V. Lòng Biết Ơn",
    subtitle: "Chìa khóa mở cửa sự đủ đầy",
    imageUrl: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop",
    sections: [
      {
        title: "Thực Hành Biết Ơn Mỗi Ngày",
        icon: "fa-hands-praying",
        color: "indigo",
        items: [
          "Biết ơn những gì đang có để được ban cho thêm.",
          "Trân trọng công việc, khách hàng và từng đồng tiền nhỏ.",
          "Sự vô ơn là rào cản lớn nhất ngăn dòng tiền chảy về.",
          "Biết ơn cả những thử thách vì chúng giúp ta trưởng thành."
        ]
      }
    ]
  },
  {
    id: 7,
    type: SlideType.CONTENT,
    title: "VI. Sự Hào Phóng",
    subtitle: "Gieo hạt mầm thịnh vượng",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    sections: [
      {
        title: "Nghệ Thuật Cho Đi",
        icon: "fa-hand-holding-heart",
        color: "emerald",
        items: [
          "Quy luật nhân quả: Muốn nhận lại, trước hết phải cho đi.",
          "Cho đi nụ cười, lời khen, kiến thức và sự giúp đỡ.",
          "Cho đi với tâm thế hoan hỉ, không mong cầu trả ơn.",
          "Hào phóng giúp mở rộng tâm hồn và thu hút nguồn lực mới."
        ]
      }
    ]
  },
  {
    id: 8,
    type: SlideType.CONCLUSION,
    title: "Lời Khuyên Cốt Lõi",
    subtitle: "Bắt đầu thay đổi từ bên trong",
    sections: [
      {
        title: "Lộ Trình Hạnh Phúc Trọn Vẹn",
        icon: "fa-star",
        color: "amber",
        items: [
          "Sống chính trực tuyệt đối.",
          "Nâng cao giá trị phục vụ mỗi ngày.",
          "Hiếu thảo với cội nguồn cha mẹ.",
          "Thực hành biết ơn và hào phóng vô điều kiện."
        ]
      }
    ]
  },
  {
    id: 9,
    type: SlideType.THANKS,
    title: "Cảm Ơn!",
    subtitle: "Chúc bạn tìm thấy sự thịnh vượng và bình an trọn vẹn."
  }
];
