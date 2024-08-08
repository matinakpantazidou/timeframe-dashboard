import { Activity } from './types';

export const timeframes: Activity[] = [

    {
      title: 'Job',
      timeframes: {
        daily: {
          current: 2,
          previous: 1
        },
        weekly: {
          current: 10,
          previous: 4
        },
        monthly: {
          current: 15,
          previous: 5
        }
      }
    },
    {
      title: 'Fun',
      timeframes: {
        daily: {
          current: 5,
          previous: 12
        },
        weekly: {
          current: 8,
          previous: 23
        },
        monthly: {
          current: 13,
          previous: 25
        }
      }
    },
    {
      title: 'Learning',
      timeframes: {
        daily: {
          current: 1,
          previous: 0
        },
        weekly: {
          current: 2,
          previous: 3
        },
        monthly: {
          current: 5,
          previous: 4
        }
      }
    },
    {
      title: 'Sport',
      timeframes: {
        daily: {
          current: 1,
          previous: 6
        },
        weekly: {
          current: 2,
          previous: 12
        },
        monthly: {
          current: 4,
          previous: 14
        }
      }
    },
    {
      title: 'E-mails',
      timeframes: {
        daily: {
          current: 9,
          previous: 3
        },
        weekly: {
          current: 15,
          previous: 9
        },
        monthly: {
          current: 35,
          previous: 20
        }
      }
    },
    {
      title: 'Health',
      timeframes: {
        daily: {
          current: 0,
          previous: 2
        },
        weekly: {
          current: 1,
          previous: 4
        },
        monthly: {
          current: 7,
          previous: 4
        }
      }
    }
  ]