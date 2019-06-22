var collections = {
    "News": {
        "Github": [{
            "name": "Hacker News",
            "url": "https://news.ycombinator.com/"
        },{
            "name": "Trending  repositories on GitHub today",
            "url": "https://github.com/trending"
        }],
    },
    "OS": {
        "Linux": [{
            "name": "The Linux Kernel Archives",
            "url": "https://www.kernel.org/"
        },{
            "name": "鸟哥的 Linux 私房菜",
            "url": "http://cn.linux.vbird.org/linux_basic/linux_basic.php"
        },{
            "name": "Linux入门教程 - C语言中文网",
            "url": "http://c.biancheng.net/cpp/linux/"
        },{
            "name": "Linux Shell脚本教程 - C语言中文网",
            "url": "http://c.biancheng.net/cpp/shell/"
        },{
            "name": "Official Ubuntu Documentation",
            "url": "https://help.ubuntu.com/"
        }],
        "Windows": [{
            "name": "Windows编程入门 - C语言中文网",
            "url": "http://c.biancheng.net/cpp/windows/"
        }]
    },
    "Web": {
        "Nginx": [
            {
                "name": "Nginx开发从入门到精通",
                "url": "https://docs.pythontab.com/nginx/nginx-book/"
            }
        ],
        "Jinja": [{
                "name": "Jinja2 中文手册",
                "url": "https://docs.pythontab.com/jinja/jinja2/"
            }
        ],
        "Tornado": [{
                "name": "Tornado Web Server &mdash; Tornado 6.0.2 documentation",
                "url": "http://www.tornadoweb.org/en/stable/index.html"
            },{
                "name": "《Introduction to Tornado》",
                "url": "https://docs.pythontab.com/tornado/introduction-to-tornado/"
            }
        ],
        "Django": [{
                "name": "Django Documentation - Django",
                "url": "https://docs.djangoproject.com/en/2.2/"
            },{
                "name": "Django 文档 - Django",
                "url": "https://docs.djangoproject.com/zh-hans/2.2"
            },{
                "name": "Django 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/django/django-tutorial.html"
            },{
                "name": "Django 中文文档",
                "url": "https://docs.pythontab.com/django/django1.5/"
            }
        ],
        "Flask": [{
            "name": "Flask 0.10.1 文档",
            "url": "http://docs.jinkan.org/docs/flask/"
            }
        ],
        "Javascript": [{
                "name": "JavaScript 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/js/js-tutorial.html"
            },{
                "name": "JavaScript教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1022910821149312"
            },{
                "name": "jQuery 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/jquery/jquery-tutorial.html"
            }
        ],
        "NodeJs": [{
                "name": "nodejs中文手册",
                "url": "https://docs.pythontab.com/nodejs/"
            }
        ],
        "webpack": [{
                "name": "webpack",
                "url": "https://webpack.js.org/concepts/"
            },{
                "name": "webpack 中文文档(v4.15.1)",
                "url": "http://webpack.html.cn/"
            }
        ],
        "vue.js": [{
                "name": "Vue.js 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/vue2/vue-tutorial.html"
            },{
                "name": "介绍 — Vue.js",
                "url": "https://cn.vuejs.org/v2/guide/index.html"
            }
        ],
        "Layui": [{
                "name": "layui开发使用文档 - 入门指南",
                "url": "https://www.layui.com/doc/"
            }
        ],
    },
    "Program": {
        "网络编程": [{
                "name": "C/C++ socket编程教程 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/socket/"
            },{
                "name": "Socket Programming in Python (Guide) – Real Python",
                "url": "https://realpython.com/python-sockets/"
            }
        ],
        "数据结构与算法": [{
                "name": "数据结构与算法教程 - 数据结构C语言版教程",
                "url": "http://data.biancheng.net/"
            },{
                "name": "数据结构与算法系列 目录 - 如果天空不死 - 博客园",
                "url": "https://www.cnblogs.com/skywang12345/p/3603935.html"
            }
        ],
        "设计模式": [{
            "name": "设计模式 - 菜鸟教程",
            "url": "https://www.runoob.com/design-pattern/design-pattern-tutorial.html"
        },{
            "name": "Java设计模式详解 - 微学苑",
            "url": "http://www.weixueyuan.net/java/shejimoshi/"
        }],
        "版本控制": [{
                "name": "Pro Git book",
                "url": "https://docs.pythontab.com/github/gitbook/"
            },{
                "name": "Git 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/git/git-tutorial.html"
            },{
                "name": "Git教程 - 廖雪峰的官方网站",
               "url": "https://www.liaoxuefeng.com/wiki/896043488029600"
            },{
                "name": "SVN 教程 - 菜鸟教程",
               "url": "https://www.runoob.com/svn/svn-tutorial.html"
            }
        ],
        "数据库": [{
                "name": "SQL 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/sql/sql-tutorial.html"
            },{
                "name": "SQL教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1177760294764384"
            },{
                "name": "MySQL 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/mysql/mysql-tutorial.html"
            },{
                "name": "MongoDB 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/mongodb/mongodb-tutorial.html"
            },{
                "name": "Redis 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/redis/redis-tutorial.html"
            },{
                "name": "Redis 设计与实现",
                "url": "https://docs.pythontab.com/redis/redisbook/"
            },{
                "name": "Elasticsearch 权威指南（中文版）",
                "url": "http://wiki.jikexueyuan.com/project/elasticsearch-definitive-guide-cn/"
            },{
                "name": "SQLite 教程",
                "url": "http://wiki.jikexueyuan.com/project/sqlite/"
            }
        ],
        "机器学习": [{
                "name": "TensorFlow 官方文档中文版",
                "url": "https://docs.pythontab.com/tensorflow/"
            }
        ],
        "GUI": [{
                "name": "Qt 学习之路",
                "url": "http://wiki.jikexueyuan.com/project/learn-road-qt/"
            },{
                "name": "Qt for Python",
                "url": "https://doc.qt.io/qtforpython/index.html"
            }
        ],
        "C": [{
                "name": "C语言入门教程 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/u/jiaocheng/"
            },{
                "name": "C语言和内存 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/u/c20/"
            },{
                "name": "C语言模块化开发（多文件编程） - C语言中文网",
                "url": "http://c.biancheng.net/cpp/u/c16/"
            },{
                "name": "C语言教程 - 菜鸟教程",
                "url": "https://www.runoob.com/cprogramming/c-tutorial.html"
            },{
                "name": "C语言教程 中文版",
                "url": "http://wiki.jikexueyuan.com/project/c/"
            }
        ],
        "C++": [{
                "name": "C++入门教程 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/biancheng/cpp/rumen/"
            },{
                "name": "C++ 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/cplusplus/cpp-tutorial.html"
            },{
                "name": "Visual Studio 中的 C++ - Microsoft Docs",
                "url": "https://docs.microsoft.com/zh-cn/cpp/overview/visual-cpp-in-visual-studio?view=vs-2019"
            },{
                "name": "C++ Programming Language - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/c-plus-plus/"
            }
        ],
        "C#": [{
                "name": "C# 指南 - Microsoft Docs",
                "url": "https://docs.microsoft.com/zh-cn/dotnet/csharp/"
            },{
                "name": "C# 教程 - 菜鸟教程",
                "url": "https://www.runoob.com/csharp/csharp-tutorial.html"
            }
        ],
        "Go": [{
                "name": "Go教程 - 菜鸟教程",
                "url": "https://www.runoob.com/go/go-tutorial.html"
            },{
                "name": "Go入门指南",
                "url": "http://wiki.jikexueyuan.com/project/the-way-to-go/"
            }
        ],
        "Java": [{
                "name": "Java入门教程 - 微学苑",
                "url": "http://www.weixueyuan.net/java/rumen/"
            },{
                "name": "Java教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1252599548343744"
            },{
                "name": "Java 提高篇",
                "url": "http://wiki.jikexueyuan.com/project/java-enhancement/"
            }
        ],
        "Android": [{
                "name": "Android基础入门教程 - 菜鸟教程",
                "url": "https://www.runoob.com/w3cnote/android-tutorial-intro.html"
            }
        ],
        "Python": [{
                "name": "Python Documentation contents &#8212; Python 3.7.0a2 documentation",
                "url": "https://python.readthedocs.io/en/latest/contents.html"
            },{
                "name": "Python Cookbook 3rd Edition Documentation",
                "url": "https://python3-cookbook.readthedocs.io/zh_CN/latest/index.html"
            },{
                "name": "Python3教程 - 菜鸟教程",
                "url": "https://www.runoob.com/python3/python3-tutorial.html"
            },{
                "name": "Python教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1016959663602400"
            },{
                "name": "Python Tutorial - tutorial spoint",
                "url": "https://www.tutorialspoint.com/python/"
            },{
                "name": "Python编程时光 &mdash; MING&#39;s BLOG 1.0.0 文档",
                "url": "http://python-online.cn/zh_CN/latest/"
            },{
                "name": "《Python进阶》",
                "url": "https://docs.pythontab.com/interpy/"
            },
        ],
        "Scrapy": [{
                "name": "Scrapy 1.6 documentation &mdash; Scrapy 1.6.0 documentation",
                "url": "https://docs.scrapy.org/en/latest/"
            },{
                "name": "Scrapy 0.24 文档 &mdash; Scrapy 0.24.6 文档",
                "url": "https://scrapy-chs.readthedocs.io/zh_CN/0.24/index.html"
            },
        ],
        "Spider": [{
                "name": "Requests: HTTP for Humans™ &#8212; Requests 2.22.0 documentation",
                "url": "https://2.python-requests.org/en/master/"
            },{
                "name": "Beautiful Soup 4.4.0 文档",
                "url": "https://docs.pythontab.com/beautifulsoup4/"
            }
        ]
    },
    "Network": {
        "Tor": [{
            "name": "Tor Documentation - Tor Project",
            "url": "https://www.torproject.org/docs/documentation.html.en"
        }],
    },
    "安全": {
        "CTF": [{
                "name": "CTF Test - szysec/ctftest",
                "url": "https://github.com/szysec/ctftest/blob/master/readme.md"
            },{
                "name": "CTF-All-In-One 《CTF 竞赛入门指南》",
                "url": "https://firmianay.gitbooks.io/ctf-all-in-one/content/"
            },{
                "name": "CTF Field Guide",
                "url": "https://trailofbits.github.io/ctf/"
            },{
                "name": "CTF 领域指南",
                "url": "https://wizardforcel.gitbooks.io/ctf-field-guide/content/"
            }
        ],
        "WriteUp": [{
            "name": "VulnHub/ctf-writeups: CTF write-ups from the VulnHub CTF Team",
            "url": "https://github.com/VulnHub/ctf-writeups"
        }],
        "Pwn": [{
                "name": "pwntools &mdash; pwntools 3.12.1 documentation",
                "url": "https://pwntools.readthedocs.io/en/stable/"
            },{
                "name": "pwntools &mdash; pwntools 3.12.0dev 文档",
                "url": "https://pwntools-docs-zh.readthedocs.io/zh_CN/dev/index.html"
            }
        ],
        "工具": [{
                "name": "爱盘 - 在线破解工具包",
                "url": "https://down.52pojie.cn/"
            }
        ],
    },
    "Other": {
        "Twitter": [{
            "name": "python-twitter 3.4.2 documentation",
            "url": "https://python-twitter.readthedocs.io/en/latest/"
        }],
        "Software": [{
            "name": "Package Control Download",
            "url": "https://github.com/wbond/package_control/releases"
        }],
        "Github": [{
            "name": "关于 | RSSHub",
            "url": "https://docs.rsshub.app/"
        }]
    }
}
