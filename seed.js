require('dotenv').config();
require('./config/database');

const Quote = require('./models/quote');

// Pattern:  IIFE
(async function() {

  await Quote.deleteMany({});

  const quotes = await Quote.create([
    
    {"quote":"The ability to observe without evaluating is the highest form of intelligence.","source":"J Krishnamurti"  },
    {"quote":"Real learning comes about when the competitive spirit has ceased","source":"J Krishnamurti"  },
    {"quote":"All true artists, whether they know it or not, create from a place of no-mind, from inner stillness.","source":"Eckhart Tolle"  },
    {"quote":"A path is made by walking on it.","source":"Zhuangzi"  },
    {"quote":"So we beat on, boats against the current, borne back ceaselessly into the past.","source":"F. Scott Fitzgerald"  },
    {"quote":"You can hold yourself back from the sufferings of the world, that is something you are free to do and it accords with your nature, but perhaps this very holding back is the one suffering you could avoid.","source":"Franz Kafka"  },
    {"quote":"Productivity is being able to do things that you were never able to do before.","source":"Franz Kafka"  },
    {"quote":"Man is affected not by events but by the view he takes of them.","source":"Seneca"  },
    {"quote":"Just as true humor is laughter at oneself, true humanity is knowledge of oneself.","source":"Alan Watts"  },
    {"quote":"The real meditation is how you live your life.","source":"Jon Kabat-Zinn"  },
    {"quote":"Life becomes easier and more beautiful when we can see the good in other people.","source":"Roy T. Bennett"  },
    {"quote":"The truth is: Belonging starts with self-acceptance. Your level of belonging, in fact, can never be greater than your level of self-acceptance, because believing that you're enough is what gives you the courage to be authentic, vulnerable and imperfect.","source":"Brene Brown"  },
    {"quote":"I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.","source":"Henry David Thoreau"  },
    {"quote":"When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.","source":"Joseph Campbell"  },
    {"quote":"What each must seek in his life never was on land or sea. It is something out of his own unique potentiality for experience, something that never has been and never could have been experienced by anyone else.","source":"Joseph Campbell"  },
    {"quote":"I equate ego with trying to figure everything out instead of going with the flow. That closes your heart and your mind to the person or situation that's right in front of you, and you miss so much.","source":"Pema Chodron"  },
    {"quote":"However, love, peace and happiness are inherent in the knowing of our own being. In fact, they are the knowing of being. They are simply other names for our self.","source":"Rupert Spira"  },
    {"quote":"In reality, which means in our actual experience, all experience is one seamless substance. The duality between the inside self and the outside object, world or other is never actually experienced. It is always imagined.","source":"Rupert Spira"  },
    {"quote":"This perpetual longing for happiness—which can, by definition, never be fulfilled because that very search itself denies the happiness that is present in our own being now—condemns us to an endless search in the future and thus perpetuates unhappiness. It is for this reason that the poet said, “Most men lead lives of quiet desperation.","source":"Rupert Spira"  },
    {"quote":"Your entire life only happens in this moment. The present moment is life itself. Yet, people live as if the opposite were true and treat the present moment as a stepping stone to the next moment - a means to an end.","source":"Eckhart Tolle"  },
    {"quote":"The truth is that you already are what you are seeking","source":"Adyashanti"  },
    {"quote":"All that is necessary to awaken to yourself as the radiant emptiness of spirit is to stop seeking something more or better or different, and to turn your attention inward to the awake silence that you are.","source":"Adyashanti"  },
    {"quote":"Love is a flame that burns everything other than itself. It is the destruction of all that is false and the fulfillment of all that is true.","source":"Adyashanti"  },
    {"quote":"In the end it’s all very simple. Either we give ourselves to Silence or we don’t.","source":"Adyashanti"  },
    {"quote":"People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.","source":"Thich Nhat Hanh"  },
    {"quote":"The source of love is deep in us and we can help others realize a lot of happiness. One word, one action, one thought can reduce another person’s suffering and bring that person joy.","source":"Thich Nhat Hanh"  },
    {"quote":"The wave does not need to die to become water. She is already water.","source":"Thich Nhat Hanh"  },
    {"quote":"Usually when we hear or read something new, we just compare it to our own ideas. If it is the same, we accept it and say that it is correct. If it is not, we say it is incorrect. In either case, we learn nothing.","source":"Thich Nhat Hanh"  },
    {"quote":"The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.","source":"Thich Nhat Hanh"  }
    
  ]);

  process.exit();

})();