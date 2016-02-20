export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);

  // PTO Times
  var start = {
    title: 'Start',
    offset: 0
  };
  var pto_result = {
    title: 'Result Announced',
    offset: 1000 * 60 * 1,
  };
  var pto_stage = {
    title: 'On Stage',
    offset: 1000 * 60 * 2
  };
  var pto_speech = {
    title: 'Speech Done',
    offset: 1000 * 60 * 3
  };
  var pto_end = {
    title: 'Off Stage',
    offset: 1000 * 60 * 4
  };

  // FTO times
  var sabb_end = {
    title: 'End',
    offset: 1000 * 60 * 2
  };
  var fto_result = {
    title: 'Result Announced',
    offset: 1000 * 60 * 2,
  };
  var fto_stage = {
    title: 'On Stage',
    offset: 1000 * 60 * 3
  };
  var fto_speech = {
    title: 'Speech Done',
    offset: 1000 * 60 * 5
  };
  var fto_end = {
    title: 'Off Stage',
    offset: 1000 * 60 * 6
  };

   var opening = server.create('time-block', {
    title: 'Opening',
    subtitle: 'Alex, Josh, Peter',
    hour: 21,
    minute: 0,
  });
  server.db['time-blocks'].update(opening.id, {'times': [
    start,
    {
      title: 'On Stage',
      offset: 1000 * 60 * 3 + 1000
    },
    {
      title: 'On floor',
      offset: 1000 * 60 * 8
    },
    {
      title: 'End',
      offset: 1000 * 60 * 10
    }
  ]});

  var policy = server.create('time-block', {
    title: 'Policy Coordinator, Faculty Reps: Arts, Social Science, Science',
    subtitle: 'Alex, Josh',
    hour: 21,
    minute: 20,
  });
  server.db['time-blocks'].update(policy.id, {'times': [
    start,
    {
      title: 'Result Announced',
      offset: 1000 * 60 * 5,
    },
    {
      title: 'On Stage',
      offset: 1000 * 60 * 6
    },
    {
      title: 'Off Stage',
      offset: 1000 * 60 * 7
    },
    {
      title: 'START VIDEO 01 - Charlie, Stephen',
      offset: 1000 * 60 * 7 + 7000
    }
  ]});

  var inmarag = server.create('time-block', {
    title: 'International, Mature, RAG',
    subtitle: 'Peter, Alex',
    hour: 21,
    minute: 32,
  });
  server.db['time-blocks'].update(inmarag.id, {'times': [
    start,
    {
      title: 'Result Announced',
      offset: 1000 * 60 * 2,
    },
    {
      title: 'On Stage',
      offset: 1000 * 60 * 3
    },
    {
      title: 'Speech Done',
      offset: 1000 * 60 * 4
    },
    {
      title: 'Off Stage',
      offset: 1000 * 60 * 5
    },
    {
      title: 'START VIDEO 02 - Lucas, Beth',
      offset: 1000 * 60 * 5 + 11000
    }
  ]});

  var incrowd = server.create('time-block', {
    title: 'In Crowd',
    subtitle: 'Josh',
    hour: 21,
    minute: 43,
  });
  server.db['time-blocks'].update(incrowd.id, {'times': [
    start,
    {
      title: 'End',
      offset: 1000 * 60 * 2
    }
  ]});

  var eebme = server.create('time-block', {
    title: 'E&E and BME',
    subtitle: 'Alex, Peter',
    hour: 21,
    minute: 45,
  });
  server.db['time-blocks'].update(eebme.id, {'times': [
    start,
    pto_result,
    pto_stage,
    pto_speech,
    pto_end,
    {
      title: 'START VIDEO 03 - Golfo, Alex',
      offset: 1000 * 60 * 4 + 5000
    }
  ]});

  var voldis = server.create('time-block', {
    title: 'Volunteering and Disabled',
    subtitle: 'Peter, Josh',
    hour: 21,
    minute: 55,
  });
  server.db['time-blocks'].update(voldis.id, {'times': [
    start,
    pto_result,
    pto_stage,
    pto_speech,
    pto_end,
    {
      title: 'START VIDEO 04 - Dom, Heather',
      offset: 1000 * 60 * 4 + 8000
    }
  ]});

  var wolg = server.create('time-block', {
    title: 'Women\'s and LGBTQ',
    subtitle: 'Josh, Peter',
    hour: 22,
    minute: 05,
  });
  server.db['time-blocks'].update(wolg.id, {'times': [
    start,
    pto_result,
    pto_stage,
    pto_speech,
    pto_end
  ]});

  var brea = server.create('time-block', {
    title: 'BREAK',
    hour: 22,
    minute: 09,
  });
  server.db['time-blocks'].update(brea.id, {'times': [
    start,
    {
      title: 'START VIDEO 05 - Bunnies',
      offset: 1000 * 60 * 20 - 6000
    },
    {
      title: 'End',
      offset: 1000 * 60 * 21
    }
  ]});

  var backcrowd = server.create('time-block', {
    title: 'Back In Crowd',
    subtitle: '',
    hour: 22,
    minute: 20,
  });
  server.db['time-blocks'].update(backcrowd.id, {'times': [
    start,
    sabb_end
  ]});

  var pastact = server.create('time-block', {
    title: 'Past Sabb - Chris Wall',
    subtitle: 'Alex',
    hour: 22,
    minute: 22,
  });
  server.db['time-blocks'].update(pastact.id, {'times': [
    start,
    sabb_end
  ]});

  var activities = server.create('time-block', {
    title: 'Activities',
    subtitle: 'Josh, Peter',
    hour: 22,
    minute: 24,
  });
  server.db['time-blocks'].update(activities.id, {'times': [
    start,
    fto_result,
    fto_stage,
    fto_speech,
    fto_end,
    {
      title: 'START VIDEO 06 - Aaron, Ros, Jack',
      offset: 1000 * 60 * 6 + 19000
    }
  ]});

  var pastwell = server.create('time-block', {
    title: 'Past Sabb - Scott Dawson',
    subtitle: 'Peter',
    hour: 22,
    minute: 38,
  });
  server.db['time-blocks'].update(pastwell.id, {'times': [
    start,
    sabb_end
  ]});

  var wellbeing = server.create('time-block', {
    title: 'Community and Well-being',
    subtitle: 'Josh, Alex',
    hour: 22,
    minute: 40,
  });
  server.db['time-blocks'].update(wellbeing.id, {'times': [
    start,
    fto_result,
    fto_stage,
    fto_speech,
    fto_end,
    {
      title: 'START VIDEO 07 - Tamaki, Tron',
      offset: 1000 * 60 * 6 + 17000
    }
  ]});

  var socmedia = server.create('time-block', {
    title: 'Social Media',
    subtitle: 'Alex',
    hour: 22,
    minute: 54,
  });
  server.db['time-blocks'].update(socmedia.id, {'times': [
    start,
    {
      title: 'In Crowd with media',
      subtitle: 'Josh',
      offset: 1000 * 60 * 1
    },
    sabb_end
  ]});

  var academic = server.create('time-block', {
    title: 'Academic',
    subtitle: 'Alex, Peter',
    hour: 22,
    minute: 56,
  });
  server.db['time-blocks'].update(academic.id, {'times': [
    start,
    fto_result,
    fto_stage,
    fto_speech,
    fto_end,
    {
      title: 'START VIDEO 08 - Beevor,Habib,Oliver',
      offset: 1000 * 60 * 6 + 10000
    }
  ]});

  var pastsport = server.create('time-block', {
    title: 'Past Sabb - Grace Clarke',
    subtitle: 'Alex',
    hour: 23,
    minute: 10,
  });
  server.db['time-blocks'].update(pastsport.id, {'times': [
    start,
    sabb_end
  ]});

  var sports = server.create('time-block', {
    title: 'Sports President',
    subtitle: 'Peter, Josh',
    hour: 23,
    minute: 12,
  });
  server.db['time-blocks'].update(sports.id, {'times': [
    start,
    fto_result,
    fto_stage,
    fto_speech,
    fto_end,
    {
      title: 'START VIDEO 09 - JJ, Millie',
      offset: 1000 * 60 * 6 + 3000
    }
  ]});

  var pastpres = server.create('time-block', {
    title: 'Past Sabb - Ben Leatham',
    subtitle: 'Josh',
    hour: 23,
    minute: 26,
  });
  server.db['time-blocks'].update(pastpres.id, {'times': [
    start,
    sabb_end
  ]});

  var president = server.create('time-block', {
    title: 'President',
    subtitle: 'Alex, (Peter on floor)',
    hour: 23,
    minute: 28,
  });
  server.db['time-blocks'].update(president.id, {'times': [
    start,
    fto_result,
    fto_stage,
    {
      title: 'Speech Done',
      offset: 1000 * 60 * 6
    },
    {
      title: 'All sabbs on stage',
      offset: 1000 * 60 * 7
    },
    {
      title: 'FOH Done',
      offset: 1000 * 60 * 12
    }
  ]});
}
