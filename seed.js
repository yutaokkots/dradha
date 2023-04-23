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
  {"quote":"You can hold yourself back from the sufferings of the world, that is something you are free to do and it accords with your nature, but perhaps this very holding back is the one suffering you could avoid.","source":"Franz Kafka"  },
  {"quote":"Productivity is being able to do things that you were never able to do before.","source":"Franz Kafka"  },
  {"quote":"Just as true humor is laughter at oneself, true humanity is knowledge of oneself.","source":"Alan Watts"  },
  {"quote":"The real meditation is how you live your life.","source":"Jon Kabat-Zinn"  },
  {"quote":"Life becomes easier and more beautiful when we can see the good in other people.","source":"Roy T. Bennett"  },
  {"quote":"The truth is: Belonging starts with self-acceptance. Your level of belonging, in fact, can never be greater than your level of self-acceptance, because believing that you're enough is what gives you the courage to be authentic, vulnerable and imperfect.","source":"Brene Brown"  },
  {"quote":"When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.","source":"Joseph Campbell"  },
  {"quote":"What each must seek in his life never was on land or sea. It is something out of his own unique potentiality for experience, something that never has been and never could have been experienced by anyone else.","source":"Joseph Campbell"  },
  {"quote":"I equate ego with trying to figure everything out instead of going with the flow. That closes your heart and your mind to the person or situation that's right in front of you, and you miss so much.","source":"Pema Chodron"  },
  {"quote":"However, love, peace and happiness are inherent in the knowing of our own being. In fact, they are the knowing of being. They are simply other names for our self.","source":"Rupert Spira"  },
  {"quote":"Stay with the pause between these two thoughts. When we remain in this pause before the answer formulates itself, what takes place ‘there' is the most valuable and, at the same time, the most underrated or overlooked experience that one can have.","source":"Rupert Spira"  },
  {"quote":"If we look closely at the actual experience of the body rather than the idea we may have of it, we find that our only experience of it is the current sensation or perception. All sensations and perceptions appear and disappear, but our self, aware Presence, remains throughout. This ever-present 'I' cannot therefore be made out of an intermittent object such as a sensation or perception.","source":"Rupert Spira"  },
  {"quote":"In reality, which means in our actual experience, all experience is one seamless substance. The duality between the inside self and the outside object, world or other is never actually experienced. It is always imagined.","source":"Rupert Spira"  },
  {"quote":"This perpetual longing for happiness—which can, by definition, never be fulfilled because that very search itself denies the happiness that is present in our own being now—condemns us to an endless search in the future and thus perpetuates unhappiness. It is for this reason that the poet said, “Most men lead lives of quiet desperation.","source":"Rupert Spira"  },
  {"quote":"Your entire life only happens in this moment. The present moment is life itself. Yet, people live as if the opposite were true and treat the present moment as a stepping stone to the next moment - a means to an end.","source":"Eckhart Tolle"  },
  {"quote":"The truth is that you already are what you are seeking","source":"Adyashanti"  },
  {"quote":"All that is necessary to awaken to yourself as the radiant emptiness of spirit is to stop seeking something more or better or different, and to turn your attention inward to the awake silence that you are.","source":"Adyashanti"  },
  {"quote":"Love is a flame that burns everything other than itself. It is the destruction of all that is false and the fulfillment of all that is true.","source":"Adyashanti"  },
  {"quote":"All of these are labels. All of them are fine. There is nothing wrong with any one of them, until you actually believe they're true. As soon as you believe that a label you've put on yourself is true, you've limited something that is literally limitless, you've limited who you are into nothing more than a thought.","source":"Adyashanti"  },
  {"quote":"What is required after a glimpse of awakening is radical honesty, a willingness to look at how we unenlighten ourselves, how we bring ourselves back into the gravitational force of the dream state, how we allow ourselves to be divided.","source":"Adyashanti"  },
  {"quote":"All of a sudden there I was, standing there, holding my plate my of food at this wedding, and there was the realization that even though I don't see things the way most people around me see them, this is it. This is life, and it is absolutely wonderful, amazingly beautiful. The only thing left for me to do was to walk back into the world.","source":"Adyashanti"  },
  {"quote":"In the end it's all very simple. Either we give ourselves to Silence or we don't.","source":"Adyashanti"  },
  {"quote":"People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.","source":"Thich Nhat Hanh"  },
  {"quote":"The source of love is deep in us and we can help others realize a lot of happiness. One word, one action, one thought can reduce another person's suffering and bring that person joy.","source":"Thich Nhat Hanh"  },
  {"quote":"The wave does not need to die to become water. She is already water.","source":"Thich Nhat Hanh"  },
  {"quote":"Usually when we hear or read something new, we just compare it to our own ideas. If it is the same, we accept it and say that it is correct. If it is not, we say it is incorrect. In either case, we learn nothing.","source":"Thich Nhat Hanh"  },
  {"quote":"The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.","source":"Thich Nhat Hanh"  },
  {"quote":"Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.","source":"Rumi"  },
  {"quote":"silence is the language of god, all else is poor translation.","source":"Rumi"  },
  {"quote":"What hurts you, blesses you. Darkness is your candle.","source":"Rumi"  },
  {"quote":"Be a lamp, or a lifeboat, or a ladder. Help someone's soul heal. Walk out of your house like a shepherd.","source":"Rumi"  },
  {"quote":"There is the mud, and there is the lotus that grows out of the mud. We need the mud in order to make the lotus.","source":"Thich Nhat Hanh"  },
  {"quote":"Life is available only in the present. That is why we should walk in such a way that every step can bring us to the here and the now.","source":"Thich Nhat Hanh"  },
  {"quote":"Mindfulness helps you go home to the present. And every time you go there and recognize a condition of happiness that you have, happiness comes","source":"Thich Nhat Hanh"  },
  {"quote":"Be the silent watcher of your thoughts and behavior. You are beneath the thinker. You are the stillness beneath the mental noise. You are the love and joy beneath the pain.","source":"Eckhart Tolle"  },
  {"quote":"Be where you are. Look around. Just look, don't interpret. See the light, shapes, colors, textures. Be aware of the silent presence of each thing. Be aware of the space that allows everything to be.","source":"Eckhart Tolle"  },
  {"quote":"If we were to make a list of people we don't like—people we find obnoxious, threatening, or worthy of contempt—we would find out a lot about those aspects of ourselves that we can't face. If we were to come up with one word about each of the troublemakers in our lives, we would find ourselves with a list of descriptions of our own rejected qualities, which we project onto the outside world. The people who repel us unwittingly show us the aspects of ourselves that we find unacceptable, which otherwise we can't see. They mirror us and give us the chance to befriend all of that ancient stuff that we carry around like a backpack full of granite boulders.","source":"Pema Chodron"  },
  {"quote":"Meditation takes us just as we are, with our confusion and our sanity. This complete acceptance of ourselves as we are is called maitri, or unconditional friendliness, a simple, direct relationship with the way we are.","source":"Pema Chodron"  },
  {"quote":"Let the hard things in life break you. Let them effect you. Let them change you. Let these hard moments inform you. Let this pain be your teacher. The experiences of your life are trying to tell you something about yourself. Don't cop out on that. Don't run away and hide under your covers. Lean into it.","source":"Pema Chodron"  },
  {"quote":"Truth is a pathless land, and you cannot approach it by any path whatsoever, by any religion, by any sect ... Your have to be your own teacher and your own disciple. You have to question everything that man has accepted as valuable, as necessary.","source":"J. Krishnamurti"  },
  {"quote":"Peace is your natural state. It is your mind that destroys it.","source":"Ramana Maharshi"  },
  {"quote":"Silence is also conversation.","source":"Ramana Maharshi"  },
  {"quote":"It is enough that one surrenders oneself. Surrender is to give oneself up to the original cause of one's being. Do not delude yourself by imagining such a source to be some God outside you. One's source is within oneself. Give yourself up to it. That means that you should seek the source and merge in it.","source":"Ramana Maharshi"  },
  {"quote":"The srutis and the sages say that the objects are only mental creations. They have no substantive being. Investigate the matter and ascertain the truth of this statement. The result will be the conclusion that the objective world is in the subjective consciousness. The Self is thus the only Reality that permeates and also envelops the world. Since there is no duality, no thoughts will arise to disturb your peace. This is Realization of the Self. ","source":"Ramana Maharshi"  },
  {"quote":"Admit is a beautiful word—it means both “tell the truth” and “allow in.” To admit present experience—to tell the truth about what is actually present—is to recognize that what's present has already been admitted into life. The waves appearing at present have already been admitted into the ocean, and admitting that they exist is at the absolute core of this teaching. Waking up is all about admitting who you really are!","source":"Jeff Foster"  },
  {"quote":"Knowing yourself as the presence, the power that creates and moves worlds - This is Abundance. It exists in your open heart, your willingness to hold a space, to allow everything to unfold, to be. It feels like freshness of a morning and of the afternoon breeze. Like the sun warming your face. Abundance is meeting others in the sunny field of honesty and vulnerability. It is feeling like you are always Home - in yourself - no matter what happens. Abundance is simplicity. It is kindness. It is you, before every sunrise: fresh, open, and awake. You are rich, friend! You are rich!","source":"Jeff Foster"  }
 
  ]);

  process.exit();

})();

