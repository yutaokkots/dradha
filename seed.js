require('dotenv').config();
require('./config/database');

const quotesSchema = require('./models/quotes');

// Pattern:  IIFE
(async function() {

  await Quotes.deleteMany({});
  const categories = await Quotes.create([
    
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "The ability to observe without evaluating is the highest form of intelligence.",
          "source": "source",
          "Pema Chodron": "J. Krishnamurti"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Real learning comes about when the competitive spirit has ceased",
          "source": "source",
          "Pema Chodron": "J. Krishnamurti"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "All true artists, whether they know it or not, create from a place of no-mind, from inner stillness.",
          "source": "source",
          "Pema Chodron": "Eckhart Tolle"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "A path is made by walking on it.",
          "source": "source",
          "Pema Chodron": "Zhuangzi"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "So we beat on, boats against the current, borne back ceaselessly into the past.",
          "source": "source",
          "Pema Chodron": "F. Scott Fitzgerald"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "You can hold yourself back from the sufferings of the world, that is something you are free to do and it accords with your nature, but perhaps this very holding back is the one suffering you could avoid.",
          "source": "source",
          "Pema Chodron": "Franz Kafka"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Productivity is being able to do things that you were never able to do before.",
          "source": "source",
          "Pema Chodron": "Franz Kafka"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Man is affected not by events but by the view he takes of them.",
          "source": "source",
          "Pema Chodron": "Seneca"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Just as true humor is laughter at oneself, true humanity is knowledge of oneself.",
          "source": "source",
          "Pema Chodron": "Alan Watts"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "The real meditation is how you live your life.",
          "source": "source",
          "Pema Chodron": "Jon Kabat-Zinn"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Life becomes easier and more beautiful when we can see the good in other people.",
          "source": "source",
          "Pema Chodron": "Roy T. Bennett"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "The truth is: Belonging starts with self-acceptance. Your level of belonging, in fact, can never be greater than your level of self-acceptance, because believing that you're enough is what gives you the courage to be authentic, vulnerable and imperfect.",
          "source": "source",
          "Pema Chodron": "Brene Brown"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
          "source": "source",
          "Pema Chodron": "Henry David Thoreau"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.",
          "source": "source",
          "Pema Chodron": "Joseph Campbell"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "What each must seek in his life never was on land or sea. It is something out of his own unique potentiality for experience, something that never has been and never could have been experienced by anyone else.",
          "source": "source",
          "Pema Chodron": "Joseph Campbell"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "I equate ego with trying to figure everything out instead of going with the flow. That closes your heart and your mind to the person or situation that's right in front of you, and you miss so much.",
          "source": "source",
          "Pema Chodron": "Pema Chodron"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "However, love, peace and happiness are inherent in the knowing of our own being. In fact, they are the knowing of being. They are simply other names for our self.",
          "source": "source",
          "Pema Chodron": "Rupert Spira"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "In reality, which means in our actual experience, all experience is one seamless substance. The duality between the inside self and the outside object, world or other is never actually experienced. It is always imagined.",
          "source": "source",
          "Pema Chodron": "Rupert Spira"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "This perpetual longing for happiness—which can, by definition, never be fulfilled because that very search itself denies the happiness that is present in our own being now—condemns us to an endless search in the future and thus perpetuates unhappiness. It is for this reason that the poet said, “Most men lead lives of quiet desperation.",
          "source": "source",
          "Pema Chodron": "Rupert Spira"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Your entire life only happens in this moment. The present moment is life itself. Yet, people live as if the opposite were true and treat the present moment as a stepping stone to the next moment - a means to an end.",
          "source": "source",
          "Pema Chodron": "Eckhart Tolle"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "The truth is that you already are what you are seeking",
          "source": "source",
          "Pema Chodron": "Adyashanti"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "All that is necessary to awaken to yourself as the radiant emptiness of spirit is to stop seeking something more or better or different, and to turn your attention inward to the awake silence that you are.",
          "source": "source",
          "Pema Chodron": "Adyashanti"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Love is a flame that burns everything other than itself. It is the destruction of all that is false and the fulfillment of all that is true.",
          "source": "source",
          "Pema Chodron": "Adyashanti"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "In the end it’s all very simple. Either we give ourselves to Silence or we don’t.",
          "source": "source",
          "Pema Chodron": "Adyashanti"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.",
          "source": "source",
          "Pema Chodron": "Thich Nhat Hanh"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "The source of love is deep in us and we can help others realize a lot of happiness. One word, one action, one thought can reduce another person’s suffering and bring that person joy.",
          "source": "source",
          "Pema Chodron": "Thich Nhat Hanh"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "The wave does not need to die to become water. She is already water.",
          "source": "source",
          "Pema Chodron": "Thich Nhat Hanh"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "Usually when we hear or read something new, we just compare it to our own ideas. If it is the same, we accept it and say that it is correct. If it is not, we say it is incorrect. In either case, we learn nothing.",
          "source": "source",
          "Pema Chodron": "Thich Nhat Hanh"
        },
        {
          "quote": "quote",
          "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.": "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
          "source": "source",
          "Pema Chodron": "Thich Nhat Hanh"
        }
       
  ]);

  process.exit();

})();