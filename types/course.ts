export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

// 원래 타입이랑 호환이 안되는 경우 타입스크립트에서 에러가 나기 때문에 Omit 을 이용하여 해당 타입을 빼고 재선언 해야함
export interface CourseWithPath
  extends Omit<Course, "rating" | "studentCount" | "reviewsCount"> {
  rating: string;
  reviewsCount: string;
  studentCount: string;
  path: string;
}
