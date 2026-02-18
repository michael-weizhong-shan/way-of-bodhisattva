module.exports = {
  bodhisattvaSidebar: [
    //'p0',
    {
      type: 'category',
      label: '入造论之理',
      link: { type: 'doc', id: 'p0' },
      items: [
        { type: 'link', label: '礼赞句', href: '/?h=1' },
        { type: 'link', label: '立誓句', href: '/?h=2' },
        { type: 'link', label: '示现谦虚', href: '/?h=3-6' },
      ],
    },
    {
      type: 'category',
      label: '第一品 菩提心利益',
      link: { type: 'doc', id: 'p1' },
      items: [
         {
          type: 'category',
          label: '入者所依补特伽罗',
          items: [
            {
              type: 'link',
              label: '宣说身所依暇满难得',
              href: '/p1?h=1-2', // Added '='
            },
            {
              type: 'link',
              label: '意乐所依福德之心稀罕',
              href: '/p1?h=3-4', // Added '='
            },
          ],
         },
         {
          type: 'category',
          label: '入者之意乐',
          items: [
            {
              type: 'category',
              label: '发心之功德',
              items: [
                {
                  type: 'category',
                  label: '真实功德',
                  items: [
                    {
                      type: 'category',
                      label: '共同功德',
                      items: [
                        { type: 'link', label: '断除罪业', href: '/p1?h=5-6' }, // Added 'h='
                        { type: 'link', label: '成办利乐', href: '/p1?h=7-8' }, // Added 'h='
                        { type: 'link', label: '满足愿望', href: '/p1?h=9-10' }, // Added 'h='
                        { type: 'link', label: '名义转移', href: '/p1?h=11-12' }, // Added 'h='
                        {
                          type: 'category',
                          label: '以喻赞德',
                          items: [
                            { type: 'link', label: '以点金剂之喻说明由劣变胜', href: '/p1?h=13-14' },
                            { type: 'link', label: '以如意宝之喻说明难得与珍贵', href: '/p1?h=15-16' },
                            { type: 'link', label: '以妙树之喻说明果不穷尽而增上', href: '/p1?h=17-18' },
                            { type: 'link', label: '以护送者之喻说明罪业之果', href: '/p1?h=19-20' },
                            { type: 'link', label: '以火之喻说明彻底摧毁罪业', href: '/p1?h=21' },
                            { type: 'link', label: '经中所说其他功德之理', href: '/p1?h=22' },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: '特殊功德',
                      items: [
                        { type: 'link', label: '分类', href: '/p1?h=23-24' },
                        { type: 'link', label: '本体之差别', href: '/p1?h=25-26' },
                        { type: 'link', label: '功德之差别', href: '/p1?h=27-32' },
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: '具功德之合理性',
                  items: [
                    { 
                      type: 'link', 
                      label: '教证之合理性', 
                      href: '/p1?h=33-34', 
                    },
                    {
                      type: 'category',
                      label: '理证之合理性',
                      items: [
                        {
                          type: 'category',
                          label: '意乐殊胜',
                          items: [
                            {
                              type: 'link',
                              label: '意乐之所缘广大',
                              href: '/p1?h=35-38',
                            },
                            {
                              type: 'link',
                              label: '宣说意乐超胜世间',
                              href: '/p1?h=39-44',
                            }
                          ],
                        },
                        {
                          type: 'category',
                          label: '加行殊胜',
                          items: [
                            {
                              type: 'link',
                              label: '加行所缘广大',
                              href: '/p1?h=45-48',
                            },
                            {
                              type: 'link',
                              label: '其他无有如此加行',
                              href: '/p1?h=49-54',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: '赞叹具发心之补特伽罗',
                  items: [
                    { 
                      type: 'link', 
                      label: '自行利益', 
                      href: '/p1?h=55-56', 
                    },
                    {
                      type: 'link',
                      label: '是殊胜施主',
                      href: '/p1?h=57-60',
                    },
                    {
                      type: 'link',
                      label: '是殊胜福田利益',
                      href: '/p1?h=61-63',
                    },
                    {
                      type: 'link',
                      label: '不为痛苦所害',
                      href: '/p1?h=64',
                    },
                    {
                      type: 'link',
                      label: '称为应礼处与皈依处',
                      href: '/p1?h=65-66',
                    },
                  ],
                },
              ],
            },
          ],
         },
      ],
    },
  ],
};