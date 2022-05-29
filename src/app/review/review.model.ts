export class Review{
    constructor(
        public reviewId: string,
        public id: string,
        public title: string,
        public releaseDate: Date,
        public rating: number,
        public review: string
    ){}
}