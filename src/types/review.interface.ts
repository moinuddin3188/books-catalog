

export type IReviewData = {
  user: {
    name: {
      firstName: string
      lastName: string
    },
    email: string
  };
  review: string;
  postedAt: string;
};

export type IReview = {
  bookId: string;
  reviews: IReviewData[];
};
