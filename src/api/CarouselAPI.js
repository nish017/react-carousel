class CarouselAPI {
    static getPixabayData() {
      const url ="https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo";
      return fetch(url)
      .then((res) => res.json())
    }
}

export default CarouselAPI