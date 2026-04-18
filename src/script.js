/* =============================================
   SneakerVault — script.js
   All cart logic, products, dark mode, UI
   ============================================= */

// =============================================
// PRODUCT DATA
// =============================================
const PRODUCTS = [
  // JORDAN
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG 'Chicago'",
    brand: "Jordan",
    category: "jordan",
    price: 320,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 2,
    name: "Air Jordan 4 Retro 'Military Blue'",
    brand: "Jordan",
    category: "jordan",
    price: 285,
    badge: null,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhISEhMQFRIXFRAVGBcWGBIVExUXFhYXFxcWFRgYHSgiGBolGxYVITEhJSkrLi4uFx8zOD8uNygtLisBCgoKDg0OGxAQGy8lICUtLS0wLy8rLTIwNS0tLS0tLS0tLS0tNS03LS0rLS0tLSstLS0rLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xABDEAACAQIDBAcFBAYKAwEAAAABAgADEQQSIQUxQVEGEyJhcYGRMlKhscEHFELRFXKCkuHwIyQzQ1Nik6LS8URjgxb/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMEAgX/xAAgEQEBAAIDAQEAAwEAAAAAAAAAAQIRAxIhMUETFCIE/9oADAMBAAIRAxEAPwD3GIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICImurUt4wNkTmFUnjMxW5wN0REBE+EzV1vhA3RMA8yDXgfYiICIiAiIgIiICIiAiIgIiICIiAiIgIgyHr7U7IqC+UqGHOxFxpzgTEjam1afW9Sl3q2JIWxC2sLO34f4c7A8yY6rXS1I01Ovack6DjlXW3eSBu37pGdHC1GnVLp/WWqspOlnAFwVI0yC53cp7mM6214tu5IsFHDEM7O7MWy9nTIluCC1/EnfOeu4BIF7d548pVOkPTIYdurV6j1tLAdUtLW977yLTb0a6RDGUS7AK6krUy6hDvBYe6R+Id990ZYZa7UmWO9RJbf6Q1cJhnqU0DspUC5OVQTbMQNSAbaab55NtHpftCsxLYmsO5GNNR5Jb4z1TG2C2dVdGKrY2KOGIFphjOh+y9CcOgNwNHqKPQMBNeHkxwnsZ8mGWV8ri+yj7zVo1a9erXqKWyUxUd2Fl9phmPMgfsmW845KmZKJV3BZTxVCNLv3X4cbacSK7tuv1GFalhqLigq5cygpTUHebntNqb3GmtyTukxscUcPh6QVswYBgQO07ML3t/NgJOSed69YX3rHfh6DBAHfM43sAFBP6o3TQ1a27/uR20ulOHosKdUmmzWAvlJF+JCk5fOdF8wuhDDu3+kxyl+1pLPkVXpx03xeEqLTpU6QVlDCo2Zy3BgBoFIPDXeOcq9H7Tdog3JosORSw/wBpBl329sKjjVVKpdShJVltcXFiDcHTQegnDs37OMCtzUNWryuxQD9y1508fJxTH2esMsM7l5Uh0Q6f08Y60aidXWN8tjmR7C5sd6mwOh5b5dJ5t0K6L9RtKucrdXSTNSLWJIq3Cm432AqCekzLmmMy/wAtOO5a/wBEREyaEREBERAREQEREBERAREQOfaCFqVRVbKzIyhrXykiwNuNryCq7LfqkpqwbKtNSb2JygAnXwkxi8YoITeTwBS5t3E3hQbXKnwU3PmdI2I07GQgEgIwItZmK2HA2CcLiY7SwKOrC97rlAIuAP3he5A48JI3AJ7djcaMFHdYaAnW2usrW39gJXznWixG9GOVjre68D36XvA8c2vTKVqtNjdld1L2YXt3HUbrfzr39CtrVMPi6ZQGzkU3UAjOp3MPDf5HnOva/Rk0my5vava2pe2+ynU27jJTohsSkv8ATUnFZnACFRYKDvC6m5PPl5zsvLjcXLOOyr6MCMQaTUrBVqo7rcgHLciy7r3tu58Zvxak1LMcoVcwvdbsTYEc7DMfSZ7LwdSkgNi7FrFVdLJwub7++TC5wbXU+evpOS38dMiKwvWE5etWohGuWxcfrFmvYi43Hw1kL0ixtXDUnq06fZW9Nd4FNRxAA5+GgluxFQD2my9/D13Sr9ItrYmiGC4cPcEZxUOWxG8WT4G0Y/ZtMvjykVmOYMboxTNYDdwHrPQugm2Frp1FW4rIoKVBozpuFzxZe/haUFdl1lAAR+WgzA7rXC/lxl06CbDemXr1UKNqqKwKkX1ZrHUX3DznfzdLh9cvF2mS61EYe0M495dHHiOPlOmgVK6MDOVMRY2vNvZJvYX58Z8747Hfg97Dw+s6pwYJ+0fCd8sCIiAiIgIiICIiAiIgIiV7avSJUqPRFKs5XIDlsMxbWy6300udBv10awTtSqBOOtWZtxAW3FQR65vpIJcXh1c1PupD2HatSZtBfTtcgd3IzdR25SqLUc0sSgpEZrdk7r3y03uy2HLW/ERpNpbLUXKFNNrnXMerNuJXKDmPdp4z4GUNYZlYk7iSL29OG7See9L+lCZctGqalEim4J9tHVjlFNtDmNtx1HnOLob0xeniSuJYLTrlbF27YqZd7Dcugy7+A5Tf+vl17MrzY9tPTMdi0o02es6BFuxZrKFA5yobR23VqkrTU0xfeyg1d+/Kxy0xuPbN2U3W5FpYdt5alM9vJazBwQLZdb3IOnPuvIvYuCwRWmz18PULBWVT2aINwb0lYgsM4JDNmI4ETLGT7Wl3+K/g9gV8R2kUsj9WTUazIw0ZWV3GarUQ6q9gljoCbqbJ0fweHwzsqiq1cteo5oYh1bTQ3FwrkWJY+0bmwBAE7idmLVtfMttc9J3Rjz8fWZlSoyFapUDRxULOLc8xzX8LxctrJpy4XDYI1HanTpLiDqc6ZX8Qri+Xnl3zOtg6VQL19JUZWBDIzKCQQQQ6ZTr7p37tZp2ntmhR6vrWV0YsASBnRlFzcAeWgBBIvv0+7E2omIDNTe6KzLZgc3+U3PAjXUSdbrejtN6SLOSAVYFb63101uL+MjcbjaNK69nNp2VtfjlvwUE3AvYE6b582/inp0+wGzMcoy5AwuCSVz9m4AJ7WmnHcacKm5s1wwFS9xYqShNVVcFuqN+29XtLa6AWjHHslunzbNTriQo6tSufMhQVinZ/pVVxbqwD2i4XLY2DWkn0c2o1lpVSpbKrKwNw6G1nS5zGnc5QzBbm+kjgCQLBrk5gFFy1RVJz0zUsalQZbitU7DgaDMBMMxNipzZmzLlJZKj2LZk9nrjUp5gWJFNGTTgJr0mnndW2tUQEKxtf2SdBckC2bde5GnG82oxGh/7kNszFDEUnQ2Zl3G9wwK5qbhgADdSLlbC+YA6XnfWWoyIqWDApdjuABGYd5IuPOY2ae0lTqEMhHvqPImx+Bk1IKge0P5tJ2FIiICIiAiIgIiYVKgUXJtAzicTbRXgG+H5zX+kV4kjyP0jY346o4FqftHja+XvtxMgmwFVQci3JuWYuOsc82Nu7uG7ymFxKH8S+s2B15iJUsVHG4fEAG6Px5sv4t5UtYbjcoQABpewX50frN1zjTJkOZf1mOViu5QRuNyWFyQu43AuJocqTuuZ6ue5pOqhdKegtFgamFC03Bz9URei7DUZR/dtyIkD0X6IVHOeurLc3KGwqPqbZyvsqAbe94T1o4XN3CbaODRRuB7zvM9482cmtvF4sbdq/i8KopdSbBLAEBb2UD2VFso4DW++1tRI6tQw5AORHCjRms9r3sc4D2vbfoWvxItLPiNh4d9cuU81LKR4WNuf7zczeExfRquDdKi1Le+TTq/hBIqoL3IBJuNdFGUSY9f16sqDxFAD+yNSm5zBSjNmbKGvk7RFW1luqstjvKnsyb67FNhkqYSsalVQLq5DrVI9oZjqDv1B4ecicXs7EKCHpMQwAN0V1bcAtZKZsx32yWRdLkm9pzYVOrTTt57tqc+UuNNA7L2WPhbSw4Exlqewm3l3SLaVetWc1c1JzmL3ARqSrawVWBzaC2buvyEkfs9xddMT/AEFO9KpmL3Y6i4y1b6gLbdu5DfL/ANItg08dTysMrjVKlu0p7t1x3Tp2JsKlhaYRbk6Zma2ZyOLW+Q0m1/6Mbx60xnDZnvbqxuFWqhR1V0OU2IB1UhlNjyIB8hKzjdi1FJ6s5ge02YAk1ApHWOoI69mGVSrFU0vY8LcZz1qi7jacsysdGtqZS2dXcsBTqKTlJNQEkXu6Go5/t3p1VNkDBArCSOF2C7EtUYKTbQdtrZlqAO53hagfKo7ADWsZYVtw3TKernanWIqjstKLh0DEkZXJN2b3S3eLW8CBuAkiEJ3+g+p/KbLTICedq+ItpL0jcDwEiZKYf2R4QrZERAREQEREBK9tTG9sjlpJ9zYHwMi3a/uHxsYEG2MmAxkmXpL/AIdE/sr/AMZpejT40U8tPqJ50u0cMXMvvC8hN1bB0D+Gqn6pJHncGc52dTOi19eRUE/A/STS7deEpIwzEdm/r/Cdi1wvs2HhpPgwKBVUOwsLageJ5TmfZrfhqIfG4/OXSO5cc3MHxH5TMbRPug+Bt85ENgsQNyg+DKfreamFZfaSoO/Kbeser4sC49eTfA/WZffk7/QyujGTcmM742mk2cbT5/A/lNTY1OCsfASPTFTPr42adhxo4qw8vymS1lbcQZw1cUqi7FVHMkADzM4V2nhnNlrUc3+V0v8AOWS1LpL4irlHfwnIqjjqZio4kkzaZFkawhB7PpwM6aVS/jynQuCW2pObutYSr9KNtthGCIhaoRmBNxTy3tcnj4D8p6xxtuomVk9T+KxNOkpeoyoo4sQB8ZV9o9O6K3FBGqn3jdE+Op9JSdp46rXbNWcu3D3V7lXcJv2bsHF1xenSfL7x7CfvNYHynVjwY4+5VheS346sX0jxdY9qplX3afZHrvPmZ6L9n9QnCC5Js7gX5aH5kyq7O+z+qbGrWpqOSAufU2HznoGxNnJh6QpoSQCSSd5J8J55csNaxesJlvdd8RE52pERAREQNGOplqbgbyplMdZeSbSs9INo4Nb9ZTZm5rdD6ggmBE6jif58pg1dx+JvVu+VDbnSairE0vvSaEW6y69xsynUW8NZXW6d4pNAyuP/AGIM3qmUfCUeo/pKqON/IH5D6/x2Yba5Z1UqL3+Wvfynli/aS/48Op71cj4EGbqX2j0bgmjXUgg/gYaftD5SD2H9LNxUfETE7Tpn2lPw8eNp57Q+0/Z7e2aqHvR2HwvJbBdKMDXt1da5PDJUB3HuFoFuTGUzuZh+9/GdFOv7tQfD6WleYDjpfnx9R3zLzl0LIzMfaVGHfqfQj6zWcPSO+lbwuPQKZB06zjc38/DvnbhNoMDZtRJodowNI7usH894kH0l2kMCqs92DXCEA2JGpB5Hu/jazgzm2ts6liaT0aoujct6kbmU8CDGOt+l3rx4ptnblbFNdyQvBeAnApl/pfZk2Y5sQmW+hCNmI7wTYHzMnMD9n+CS2c1Kh7zlHoonb/PhjNRz/wAeV+vOdmbbxVD+zqOB7p7S+hnonQ7blXFuFelbKMxcXyabh4k2485YMJsLB07ZKFIEcSoJ9TJNbDkBOfk5Mcvxphhcf1nIvpDsZMXSKE5XGqN7p7+YPEflJK8018XTT2nVfEgfOZS6u40s2p//AOc+6lRSp9bWKk9YyZgp5Ip7K87m5mrH9H8diVs53/4j6DwVbj5S21sZUNhRpVHvvawVAPFyt/K8DC4tt7Uqfq59LD5y3K27qSSfHzA0/u9JUY5mHxkngCStzxJPlOFNiXN6lWo3cLID82/3SUp0woAGgEisoiICIiAiIgJg9JTvVT4gGZxA5X2bh230aJ8UQ/Sc77AwR34bDH/5U/yklECJPRjZ5/8AEwn+lT/KF6M7PG7B4T/Rpf8AGS0QIjE7GRV/q9HCI3C9JPoJSdvbL6Qm/U1FC8qTU6f0BnpsQPzZtrox0hcnrEx1QfrtUHwYyDOzttUDom0ltyGIt6bp+r4gflejt/bdPjij3PRv80vJGh012yP7jN39RWv8DP0vEDwnAfaTtYAL+i3ewAGVcSDp+yZLJ012zVAA2LidSLnNVXTuLUgBPYIgef4XbW2am7Y5XvqYuinyUn4SVwx2u3tYXA0x34mq59FoAfGWuIELRwmMPtNhl8FqP8ys6f0dUNs1Xv7CBb/vFpIxA4hsxPxGo3ixA9FsPhN9DCU09hEX9VQPlN0QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=",
  },
  {
    id: 3,
    name: "Air Jordan 11 Retro 'Bred'",
    brand: "Jordan",
    category: "jordan",
    price: 375,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
  },
  {
    id: 4,
    name: "Air Jordan 3 Retro 'White Cement'",
    brand: "Jordan",
    category: "jordan",
    price: 260,
    badge: null,
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
  },

  // NIKE
  {
    id: 5,
    name: "Nike Air Max 95 OG Neon",
    brand: "Nike",
    category: "nike",
    price: 259,
    badge: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 6,
    name: "Nike Dunk Low 'Panda'",
    brand: "Nike",
    category: "nike",
    price: 189,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80",
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07 White",
    brand: "Nike",
    category: "nike",
    price: 110,
    badge: null,
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80",
  },
  {
    id: 8,
    name: "Nike Blazer Mid '77 Vintage",
    brand: "Nike",
    category: "nike",
    price: 105,
    badge: null,
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
  },

  // ADIDAS
  {
    id: 9,
    name: "Adidas Yeezy Boost 350 V2 'Zebra'",
    brand: "Adidas",
    category: "adidas",
    price: 345,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
  },
  {
    id: 10,
    name: "Adidas Stan Smith 'Cloud White'",
    brand: "Adidas",
    category: "adidas",
    price: 90,
    badge: null,
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
  },
  {
    id: 11,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    category: "adidas",
    price: 180,
    badge: "New",
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
  },
  {
    id: 12,
    name: "Adidas Samba OG 'Black White'",
    brand: "Adidas",
    category: "adidas",
    price: 100,
    badge: "Trending",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhITEBIVFRMWGRUXFRgTEhgYFxoVFhIXFxUXExUYICggGB0mGxUWITEhJikrLjAuFx8zODcsNyg5LisBCgoKDg0OFw8QGS0dHR8tLS0tLS0tLSstLS0tLSs4LS0tLS0tLS0tKy0tKy03LS0tLS0rLS0tLSstLSstLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABJEAACAQICBgUJBQQHCAMAAAAAAQIDEQQhBQYSMUFRB2FxkdETIjJCUoGSofAUVGKxwSNDcpMVRFOCorLhMzRzo7TC0/EWFyX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAfEQEAAQQDAQEBAAAAAAAAAAAAAQIREhMDIWExQVH/2gAMAwEAAhEDEQA/AJxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFvEV4U4uVSUYxW9yaSXa2e0qkZJSi1KLzTTumupoCsAAAAAAMfH42nQpzq1pqFOCvKT3JfWVgPNIY+lQg6lepGnBb5Tdl1LrfUeaO0jSxEFUoVIzg+MXufJren1MgPWrWCek6+3NuFCN/JQv6vtS5N8X7tyNnqlVrYSEq1CV23ZpZqMIu724rm+fBPib4+Oa6sYYrriiLynMGm0Vp6NSFN1VGEpr1ZxnHvi8uxmdPSdBTjTdampy9GLqR2pfwxvdmZpmJtLUTExeGWACKAAAAAAAAAAAAAAAAAAAAAOI6WZylgqtOLXoOa57VNqSz4Xs17zmeiDWduccPN+bUT2E3umo7WV+dp9yOt1ip+VqVE1PZcdi8IbUWms7+a297W/gQjol1cHVTz8rhasW45q6jK6352acu9AfTwMPRGk6WJowrUJKUJq6a4c1Lk1uaMwAAABFHTtpSShhsLF2jNyq1Ffeo2VNPmr7TtziuRK5DXTvTj5bCTjJOo4zhKKknJJNSg3BZ2e1PMCNI4po2ODxFdNOG2pL2Xstdr4dm8xtH4RtvzXKXFRz2FndyldK/Uncy1pCXovJbrwyXXZb17ywLmP0zV86EowVRO0pxefWnZJN9drmou27553e1xcr8PEyP6Izuqrabz82z7L3feWtJbe1FKnLZSstmLayvyN1V1VfZuzTRTT8hJer3St5Chh6NelUrSimqlV1Fttbb2NmLXnvZ2VnJPIlfROkqeJo061GW1Tmk4vj1prg08muaPmOtRUaSc1aSs8992y/hMdiHSdKnVnGnGflNmMmo7bSV3s53tFc/cYs0+oAQjqr0oV8NB08XF4hRTs9v9qmuDk8prtz62SJqjr7hNIS8nT2qdazfk6qSk0t7g02pL59RB1QAAAAAAAAAAAAAAABzmumttLR0KbqRlJ1W4xULXSSvKTu9yuu9HRkDdM2OlLHyjd2pQhBe+PlG/ftr4UBIOhdM0MRFSoVYz5pPzl/FF5oxNaNUYYtqrSkqWJirKTV4zj7FZLeuT3rrIMw+KcWpJuMlulBuMu9Hb6vdIGKo2VV/aIfidqi7Jet7wLtOhpDRs3KMatC/pOmvKUJW4tpNL+8r9hv8AR/SjX3TjRqdcbp++0n/lRvtD684Ovl5VU58YVvMl88n7jH1l03oqEXKtHDV6lnswUIVJt2yV0ns9rAp/+0Hb/dlf/iS/8ZiYrpTqJebSpx657TXzcfzIqxmNvOUop04ybexTlJRV3dJK/C9vcUQ0hTVmoXa55974gdfpfXvHYi8Y15xi/VoRVNfHv+bOXqJRbdaW/Nxi7t39ue9mPW0lOXoq3YW6eFlLzpXt8+4DI+3VJ+ZSWxBcsl72ZuK0Y6VOMpbTcrPabvGScbrZtdKVmsnnz6vdG7EVtSVorOOXXbavxd1azs+KeR3epmq/lpLFYqHm/uacrbrt7c0rJ5t5Pi5Nozl3aGvxHexOOz51tlvaWze9uDv6O7tz4NGS8bv+dpL6/wDZNmO0LhJSlVq0aTlZylOcVuSu5Sf5sjjWXSdKrJ06EIQw8eCik5yXrTa4co9rzvlu6ORniaNROM7v+GSve+9WM7AxoU4bMJvPNuos3w4JLhwOr1M1Z+1yVavFfZ4vzYNf7Rre2uEfz3dZ3+P1dwdTalVw9JyecpKKjJ9blGz99xdEB/YKvlW3Z09py2oyTW+6XO57UxMsPVhUpTcJJ7UWt6lF5Pr3veb/AFkwGHVV/YZOFOPtNyjJ8453UeCbbvvLejNA4vFU5zjh41qcWks0m3x8ntWvbj4gbTA9JmkaUlUqzjWg9luE6cYpJ+xKCTT63ddpKWgdeMDi7KnWUKjt+zq+ZK/JXyl/dbIL0nhZQ/Z1YTpTaatUg47l6t9660YOEwU/WtJWsrZ9t/AD6kp1FJXi01zTuu9FR82aI03icBVi8NKcYNpyhm6cnfNSju9+9XyZMWjOkXB1LKq3RfObTh8a/VIg7EFrDYmFSKnSnGcHulCSlF9jWTLoAAAAAAAAA+felyP/AOjiH10/+npH0EQP0v0rY6q+apv/AJUV/wBoEdSR6pW3HsjwDIWLla0rSXWvyZSsU16KXciyVxSKEpN7y5CC6veW9rMplHO63bwM2GyrWzfX+iKo4iSaa4c81lzXIwUdPqTq1LGVU5ZUIP8AaPnllCNuLy4rK5Bv9SdXHjJrEYiFqMX5sWsqkk0223vhlFO+1ezTdyV7qK+uBjYenGnFRglGKskluS4JfWZHnSTrg43wmHlaX76Say5U1vs97byatHemSIsT2p111vVZujRknRT86S/eSi7q34U1db72Tua/VHQbx1Rt3VCD/aPjKWT2E1xta74Jrec1q3oepjK0aUMlvnK+UYLe/mluebXAnrROAp4alClSVoxVlz5tvrbuyjNoUo04qMUkkkkorJJZJRS3I4PXbWXacsPRktlZVZJ73xpx4WXF88stku9IGt32deQpP9tNec7ehB/Lal77JSva6OA0Th6mLqxo0k7yebtdQjxlLsV+Ku8t7CNpq/oWeNrbCbVONnVmluXCMeG087e952sS/g8LCjTjCnFRjFJJLgv1MXQmi6eFoxp09y3t723vlKyWfuNVrdrF9nj5Ok15ea83K+xH25cL8k+p2aCtXr9p6NpYeFm/3srJqK9iL9p8bdhGtLAQldpSilu2ZNLu3fIy603N2TbV7tt5t822eqtTjlKcFa2W0ijBraObzU5+9p/oUUqCj6V5dU22vh3fIzZ6TorfU+GLfzsYlfSlH1VJ9isvmWx0zNHYiVGW1hq1WhLj5Oo7P+KLya6jqtH9IekKVtt0sTH8UfJz9zjl3key0muEX3/6FDx8uC734WJZE16M6V8JPLEUqtB7m2tuKfJuPnf4bHa6N0nRxENvD1YVI84STt1NcH1M+W6mKlK9/r66y9orS1bD1FVw9SVOa4xdrrlJbpLqeRbF31SDmNQNalpDD7Uko1qbUasVuu15sorgnZ5cGmuB05lQAACHOmLCJ4pNPOVKm7NZebOom79mz3ExkVdMatWw8lxhJPJerNW/zMzV8WPqKZaMn+H4l1eKKf6MnyXxx5X59ZtVVfJdyKlVfJfCjGct4tV/RM/w/Gj1aKqcl8cedufM2qqy5L4V4Hvlpcl8K8C5ymDVPRdV+qvjh4lD0ZVW6H+KPibj7RLkvhPftD5LuJnK4tfo3QsqtSMZNU4+tKTVku/PsJe0TjMHh6UKdKrFQirK7zfOTy3t5vtZGCxFvVXz8T1Yr8K734kmupqKKbdy7vW3W+NKls4aW1WmmouKvsK1nN8L55LPdmiK4YGrOSSpzcpPims2+MpWS7W7G4dRb3Bd77CuOIXs9zLsmzMUdpM1O0XRwdFQjOMpuzqSUl50urqWdivW7WiGEoSmmpVXlSi1dOdsnJeysm81ezSzI1WP/i714FE8TFu72uW9Ejkn9hauP+S591auIrXe1Uq1JX3OUpSfUrt/6E46l6uRwVFKVpVpZ1JW479hPPzVkutq9kRhQxMIyUotxktztmuxo2tPWSqt2In3ss8vfwjimY+pG1n0/DCUXUlnJ5U43ttT6/wre9+XPcQrpjTlSpKTcnKcneUnzfC25dnA3GPxUcRJSrVNuSSim7+jduy7zDWCw/HY68n13NxyQxhLmZTct7b7Xf5Fpo6x4HDfg7ny8SmWBw/4O58vEuylMJcrtobXUdPLR+H4KPHnyKXo6jwUfn1DZBhLmXIbR1H2Gl7Me58/A9WFpLO0fh678Rsgwly7ZdpYecvRg37su/cdLFQj6PySXLwPNrq739cibVwdH0P4iWGxUo1HlXShZZ2kneDfDe2v7xN5C2oGi6lfFU5JWhSlGpN7ktl3iu1u3z5E0imb9pMWAAaQOJ6T9X54mjCpSzqUtrzb22oStdJvK6cU7dp2x40SYuQ+ZK7UG1UvBp2akrZ2vbPqCxEPbj3n0tPCU3vhF9sUzHnofDy9KhSfbSi/0M4N5vnONem/Xj3or8vT9qPPf8j6Dlq7g3vwtH+VHwLctVsE9+Fo/wAuJMPTNAHlYe1Hnv58B5SHtLL8Xy+uRPj1RwH3Sj8CKJamaPf9UpfCMPTNA21HmuXpcT28ea5b/mTo9R9HfdKfc/E8eomjfulP5+Iw9M0F+bzXfwXEPZ5rv4E5/wDwPRv3Sn8/EpeoGjfukO+XiNfq5+IO83mufguzxG3Hmub/AEXZ/qTe+j3Rn3WPxS8Sh9HOjPusfil4jX6bPEJ3jldrv5/XyC2erLr/AD+uRNEujTRj/q9uycvEtPot0Z/YyXZUkTX6bEO2j1d/z+uoWhzXJeP1zJefRVoz+zqfzHuPV0V6N9ip/NY1+rsRDtQ5rPdnw5r65jysOaXv4fV+4mGPRbozjRk+2oy/Do20Wv6rF9spP9Rr9NiFnXp8Wue/5dniePEU1m5R7/rq7yc6eoWjE0/sVBtbm4J/mbCnq5g47sLR/lR/VDX6mfj56eMpblJN9Tuy7C8vQp1Jfw0p/nax9GU8BSj6NKC7IJfki9GCW5Je4uuEzfPWH0Pip+hhavbKLt8rs6nQOpzuniaNef4YryceyTd5NdmyS8DUUQmUsDRFCNOmoU6KpRW6Kt3u299ZngGmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=",
  },

  // PUMA
  {
    id: 13,
    name: "Puma Suede Classic XXI",
    brand: "Puma",
    category: "puma",
    price: 75,
    badge: null,
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },
  {
    id: 14,
    name: "Puma RS-X 'Bold' Sneaker",
    brand: "Puma",
    category: "puma",
    price: 110,
    badge: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 15,
    name: "Puma Clyde 'Hardwood'",
    brand: "Puma",
    category: "puma",
    price: 85,
    badge: null,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
  },

  // NEW BALANCE
  {
    id: 16,
    name: "New Balance 550 'White Green'",
    brand: "New Balance",
    category: "newbalance",
    price: 110,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
  },
  {
    id: 17,
    name: "New Balance 990v5 'Grey'",
    brand: "New Balance",
    category: "newbalance",
    price: 185,
    badge: null,
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
  },
  {
    id: 18,
    name: "New Balance 2002R 'Sea Salt'",
    brand: "New Balance",
    category: "newbalance",
    price: 130,
    badge: "New",
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80",
  },

  // CONVERSE
  {
    id: 19,
    name: "Converse Chuck 70 High 'Black'",
    brand: "Converse",
    category: "converse",
    price: 85,
    badge: null,
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 20,
    name: "Converse Run Star Hike Hi 'White'",
    brand: "Converse",
    category: "converse",
    price: 100,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80",
  },

  // VANS
  {
    id: 21,
    name: "Vans Old Skool 'Black White'",
    brand: "Vans",
    category: "vans",
    price: 70,
    badge: null,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
  },
  {
    id: 22,
    name: "Vans Sk8-Hi 'Marshmallow'",
    brand: "Vans",
    category: "vans",
    price: 80,
    badge: "New",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },

  // CROCS
  {
    id: 23,
    name: "Crocs Classic Clog 'Black'",
    brand: "Crocs",
    category: "crocs",
    price: 55,
    badge: null,
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
  },
  {
    id: 24,
    name: "Crocs Classic Platform Clog",
    brand: "Crocs",
    category: "crocs",
    price: 65,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },
  {
    id: 25,
    name: "Crocs x Hidden Valley Ranch Clog",
    brand: "Crocs",
    category: "crocs",
    price: 90,
    badge: "Collab",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
  },

  // BIRKENSTOCK
  {
    id: 26,
    name: "Birkenstock Arizona 'Sandal'",
    brand: "Birkenstock",
    category: "birkenstock",
    price: 100,
    badge: null,
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
  },
  {
    id: 27,
    name: "Birkenstock Boston Clog 'Mocha'",
    brand: "Birkenstock",
    category: "birkenstock",
    price: 130,
    badge: "Popular",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 28,
    name: "Birkenstock Mayari 'Graceful Licorice'",
    brand: "Birkenstock",
    category: "birkenstock",
    price: 115,
    badge: null,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
  },

  // ASICS
  {
    id: 29,
    name: "ASICS Gel-Kayano 14 'Cream'",
    brand: "ASICS",
    category: "asics",
    price: 120,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
  },
  {
    id: 30,
    name: "ASICS Gel-1130 'White Sage'",
    brand: "ASICS",
    category: "asics",
    price: 110,
    badge: "New",
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
  },

  // REEBOK
  {
    id: 31,
    name: "Reebok Classic Leather 'White'",
    brand: "Reebok",
    category: "reebok",
    price: 80,
    badge: null,
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80",
  },
  {
    id: 32,
    name: "Reebok Club C 85 'White/Green'",
    brand: "Reebok",
    category: "reebok",
    price: 75,
    badge: null,
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
  },

  // TIMBERLAND
  {
    id: 33,
    name: 'Timberland 6" Premium Boot \'Wheat\'',
    brand: "Timberland",
    category: "timberland",
    price: 198,
    badge: "Iconic",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 34,
    name: "Timberland 3-Eye Lug Boat Shoe",
    brand: "Timberland",
    category: "timberland",
    price: 160,
    badge: null,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8PDw0QDw8PEBAVDxAQDxUQFhcVFhUWFxUVFRYYHSggGBolGxUVITEhJSkrLy4uGCA1ODMtNygtLisBCgoKDg0OGxAQGzclICUvLS03MC8tLS0uLSstLTUtLS83Ky0tLTU1LS0tLS0tLS0tLS0vLS0tLS0tLS0tLy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQUEBgcDAgj/xABBEAABBAECAwUFBQQJBAMAAAABAAIDEQQSIQUxQRMiUWFxBgcygZEUI0KhsXLB0fAVJDNSU2KSouGCsrPxQ0Rj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAMCAQQF/8QAKREBAAIBAgUDBAMBAAAAAAAAAAECEQMhBBIxQVETFGFxkaHwMoHhQv/aAAwDAQACEQMRAD8A7OiIgIiIClEQEREBERAREQEREBERAREQEREBQpRBCIiAoUoghERAREQfShSiAiIgIiICIpQEREBERAREQEREBQpRBCKVCAiIgKFKIIREQFClEEIiIPpERAREQFKhSgIiICIiAiIgIiICIiAiIgIiIChSiCEREBERBCIiAiIglSoUoIUoiAiIgIiIClEQEREEIpRAUKUQQilQgIiICIiAoUqEBERAUKVCAiIglSiICIiAiIgKVClAREQEREBERAREQFClEBQpRBCIiAiIghFKhAREQQilEEoiICIiAiIgKURAREQEREBERAREQEREBQpRBCIiAiIgKFKhAREQEREEoiICIiApUKUBERAREQEREBERARFWy8exGZLMN2SwZL/hi3J5WASBTSRyBIJ6I7ETKyRERwREQQiFEBERAUKUQQiIgIiIJREQV3HuNQYULp53ENBAa1otz3Hkxo6nY+QAJOwXNuJe9qZjhox4Ymm6EmuU15lpaPyWX78Ypeywpm2Yo3zNkA6OeGaCfk1/8lcmmdFkNayRxZR7sgGqvEEbX9VO1piXu4fRranNO8urcP8AewX1cOPKdrDZXwHzrUHK/wAP3k4Ttpo58f8AzFglZ8jGS7/avz/kcFLHhseQxzXC2uf91Z6itwenVZcGPxCMWxhlaOjC2b8mklQ9xWOs/fZ6vZ1mN6/Z+is72vwmYuRlRZEWR2Ebn9myQaifwgt5ts0NwuUu96+dLZbKITe2iFj214EOBPzsrTDxkg6Z8dzHjwtpHnR3C++3x3mw5t/520f9Q3/NU9SZYrwdI6b/AFdB4Z7zc+2iSTDf49pE9v0LXD/tWx4/vKIrtsJpB5HGy2PJ9GSBv6rk2JAwuGpwDOZsh1gdG9b9bVtLhB7Q5jeyH4aBDfLfqnPJ7Wkzv+/Z1zF9vuHPoSSS4zj+HIheyvV7bYP9SvsHiOPOLgyIph4xSNk/7Svz7rlB7OQmNw+GT8JHg7+KRxSPLS1sT33Q20SBw5jZ21ePKlr1ELcLGcQ/Rix8/NigjdLPK2KNnxPeaHkPMnoBuV+fcD3iZuOQIcuV7R+GQ9q36y2QPSlgcd9rcjOkD5pHP0fADs1v7DBQafOr8Stc6Xtpid5dL4z7wnyv7PGDoIdRBkdtI4Dax/hj89unIUPHseENY+3Nc9zuzrW9znNDHPcDVCtbNy4E9LWmRZt1fdO3eH7x1V9g8Xe1ujW7RI3S4NeQC3fax8xv4lStMyvWla9F1w33mTxPaDP9qioD72GRl+BEgZ+ZJXT/AGX47HnY7ZWOBkAAmYBpLX9djuAei5Vi42NkDTTABXdkk7IfE0VrIIHdLiNtyK2JVbj52PgyiWDLymPicRbIXaTXNlOPfZ5brUWxOOrF9OLR4n6T/rv6LU/Z722iySxsjezc/TpcLDSXC2gh3wk77WeRW2KsTno8lqzWcSKERdZEREBEUICIiAiIglFClBpPvcMv2BvZv0M7dpnJYX/dsjkfRaOYtjfD1HNcJmiifJI3HkAe1zhoNtDx0fGTvRG++/6rtnvnynRYeO5ji1wyhuK/wpOh2PMc1waaJjjudJ/C7ZtH5fD+nopW6vZw9sRssMPMfG7Tu0jmxw/cVsONxGOSg9jAfGqWtAyNjByA2WLXoa4O+8B06rHUiiPqPFfUWNfejmDmeDh3h6rzavD01Y3/ANfS0uJmrbsiZrWfeSDs/wC7JUzT5aX3foFQO+xySD7mOMi9xbQ42KttlrevLx6HZVE2QA7Qw278TvPwH8V4UPH5qehwcac5zk1+Ki+2MNykxmgAtPgL8/A/z+quYI2OjjAkijNu7cvcWOAaBQAA3Bt3W9uQ5nTOE8SIIZIelAnfb+67xG/yv1V3KOVGr2G/I/3T/P6q9q9kq2ju8o8nKeSQ5se5rRGKoevXzX3xjJluo2Mc0xgSF4e2zsRpLCNNVz3s8xssuedvZR9k5gLYiJIjGNb5dTiHCQtdTa0itqLSeqyZcHN7KN7jA1rubWh7nDbq4kDn1pZx8NTaOk92o4WBHO1z3h0PZ/GaBa4+RuuVmx8wNrxHwta5wDrAJANV+SuOIS5TSTCWOjFgueOZsihXRYEWSJToymsi1XplaHGj0OrevSuipEz1RtWlYx+XzEwLLgJZy5eHRYH9H5jBr+zSvbV64mGZlftMsD0NFevD+LROLWPa7U4gBzBqJJ2A0jclbSyu8aYii01/P6K2gxopTqlZtpc0aWhwDjWlxYSA6qI02LvbcUtZflhjnNo6mGqIIPzB3B8itp4duI2snZ9olxjM6MtaWtjrYSku3B8hY2rmszDXRr3FQ45JkaXNczSWuLTH8NaraPw3qNH+K7X7E+18fEGaHt7LLjYDJGTYe0UO1id+JtkX1BNHoTyHiOa+YjHIaDp1EhwfTdqp45g+p5HqNsPhHFsjh8zZI3UWk1Y1DcUdj4jZapOEtWnPv3fpJFpXs17xcXJDWz1jy+J3jJ9fw/P6rdGOBAc0ggiwQbBHkeqs8cxMdUoiI4KERAREQEREBERByv3+Zgbj4cPV0ksnyY0NH/kP0XEGTdDy6LpHvf4bkjLdrl7UPc+VoNktic7TGxpI2aA07DbUSfBc6+yO8FOZy9ulXFVqOzfHE10hb2YcG91o5mySQO90Fm+QHgvHKwpGDuAu598D93T1WAA5p2tZeHkOYbYdJJ7zT8J9f5+qzhbo84sCYN7Z0bxFqDTJpOmyLq+V1ZryX27YjULrw2seN9eXM2tl/pyKSBuPJG4ggNdFsxtNcXB8cjTqDtXMEOFi6BJCp5+EsdvBPt/h5BDfkJR3Cf2gxZi3l3l5uithfvfUlbRhZOtgB3IFHzHgVQxcJyu0Ef2WUyOFtaIy7UBW7a2cNxuL5rLw8rQBTdXimYluKrphpwPnfr/ytg4lUoa9kpa0x6eybH3nPIPeMg3I5bH4QKA6qnnxHtFuDPga9zQ/vsBqi9tUOYNAkgGyAsLO4r9mZQJc54oMaRvdmwatuxH8OhxNc7S1NoxmJZmI5rXPjA7vMD1uxsq3imLpJLRYPMEWPmp4a91F8la3nU4DYDwA8gKCyMmSwts1iYjdSNxySH47+zlbyYTpP/Q/p6H6r3g41mxShs73v00SXATOALeYMmoDZw2sdRssbIYQ62ml7jMa8Bs7dYHwu3a4ejhuF3aXJ0pjerx4xnGeZsjXPfpjYxz5HNL3Ft95waSG0KaBZ2aFnYvFJS0NlIkiF9wknYkEgEEVuA7Y8wCsV/DXuFwZDnjoyQjUPQnY/ksSQSB1ShwPKnWPpf7lzGIY+F/BlgOtpBBaBT3APsuNjXVOaLJs0d6rqmVKKuaGVg2Gvsy5oJ5Avbbb+aqWEeNL7jlc0hzCQRyPKvQrsGPD1ja27hmY7yDhf0WwcE9rMzDPde5rerTu0+rTsqB+TrFSMbJQItzQ4jVzokbb72F6RGDkI3R8t45XtO3PYkt3/ZXYnDlq56w6jg+9OwO0gjLutPcwfWnV9Fc43vExnGn484FfFH2czfoHB/8AsXHmY8J27WW+hcIpBvyumNO3XdfY4Y0b9uaof/VHzvTOPX06rXNKFtGruUHtjw1wBOYyG+QyQ7FPhymDVdQzMe0OY9r2nk5jg4fUL86SRmJur7bMwHVWnGsbEVs7IrzWye6nj8TOIOga+V4ymuGqQMjAc23NpjNrNEXfVaiydtHEZh2pERaQEUIglEQlBzj3ttc44wj062skO7QTTi0EeY7vJcsyYmg99hb47H9Of6+q6j7y33kxDoMdv5vk/gtR1bUQHDqHCwvFfVtW84fT0a1nTjLVPskbvhc0+hXhJw09Ftb+G479y0xnbkA9v0csWXg0jRcTtQF7C3jnt3XHUPWzy5LUa9e+yk6U9t2qOicLDuXUHcFfbJCOvyJ/R3P63fkreZnPtGV4vbZbyvcEBzfmAsHIwiN295p6jdV2neE8MrgvFxE8a3zsh1Nc5sWk25rgeTiGXt8WxGx35LFkdrkkfo0tke9wGu6DiSBqPOrq/JYOojqR86X0yc+JH7Ox+ZWcKVy2XE4qWdrpnbHOREdbhKXS6A6w8tDi0/AdgA6hfnGTjxveZp2CCV1XLHUuMSeRuEuEbieYA3O9AqjxpGgGgLPjus3DyHsILHFp8uRrfvA7OHkbC6z6cxOYZkkD2jVQLDyexwe3rXeaSAdjtzWM6Re7Zor1dk6KS3XJjSfZySdxbSHRtAO9MY3p536mGJ1uE7TtbWTwOZbj8QL4XEgdQSPKlzHhr1Jj+UK55HVYc8g6bK7l4VYNdk9w0tAhzYwHE/ia2anO57/COdLxl9m5t6gyiNQaKgEo1Gu7qjcQTvzFj0TllqNaneVTi5BB2V7hcQdyO48CLFeBB6LGHApm7/Zsz+00V9jfz8q5nn5eayo+F5A2+yZQOsMJ+yuaLI2FuI/gPFajKV7UnusBj4so+8x2NJvvQ/dHc3sG936tKxMz2dZRdBkfC0uMco3oc6cPi+YHkCpbgzV3wyLvaSZsyFgB3shsZe91DwHPxWBPm47L15Mk7e99xjMdAwkEFuuaQ6yOewbe/Mcx2cJxnsrZ3kEsrdpo15KTMNtlecL4C/iDX5DJ4seyGiIQd1oa0Bob3x3aFeO29rNk93+T+HMiPKtULm+vJx2U5vWJVj6NUE7l9tnl6ErZx7Bz9c+IbjlDfrzeFMfsRRHacUGmzYZAwGulEyn9E9SrmJ8NVeyR+znGvVbf7reBas+GQAnsTrcfAN8fnQ+a+4vZPBb/AGuZNIa6SNaL6mmMJ+Wr6q44EzHwnXi9o1ziNTg5+4u6LnuND0A5Lka1Yly9LTXDsChSVC9T5giIgLHy5S0clkKCL5oOXe3QnfNHKyIyN0tY8AGwNRN/mtXMrLeLrs/jvYDa/wCfRdylwY3c2BUfEvYjBna8GPsy/wCJ0f3ZPqW8159TQ5pzEvVpcTyxiYcqBFbHnyINilhcR4u3GLNTHODgSS07ijtQPP6rfc73byNLPs2QDHG0hsTwbOwAt99K8FpHtD7v+Lyu3ZC1jbDae4mrPOmndR9C3NiXqjiNPGcvTDzsfJHceHOG/d7kjfOtj+5eM/CKssIH+ZrdvR0fL5ij5HrUj3dZLCHOyAx43GhjrB8nWCrbFkzcfuzsOQwcpY6EgH+Zuwd+vqtToWpvSWacXS04vH9qXPw9rkZ2f/6N7zL8C78J8nUVVy4EjeQ1DxBXQBokAdRGpoIcBpNHfdp+W35KuyOBMcSYjoPQxHQL6ksI0n5ALMa8dLQ9MUn/AJnLS26m8xXyX3HmOBWxzcGyAaDo5Bf/AMjDGa8e7qv6f8YMvDZR8WJYJO7HsI2vfcggbdVSL1nuTE94Y0GeL7wtWEGXjm9QIO1VSrzCBV484u6+6J5XfK/ArzJhqy2QC6sxv5+HLmtpzMeVz9oxAPjdd+HT+bXlLnY43aL8PRVRkg3B1W3mOzdt67IJYdqZI6xYqJxseWyYMx5e+RxQADQ2jfMeHgsR2Y81udiSPmsqKB7v7PByn+Yx3V9VnRcHzXGm4Dm+cksUf5E2uTasdZdj4hUOMj+QP/te+LwkuNuNDqtgi9lsw/2k2Ljjy1TO/QN/NZ+P7NYrTc0suWfBx0s/0NoH5kqU69I+VIrMsdsc0WPCcHFfmd/70xRulDWAkO+H8VigsviGRNH2fZYGVNcjRJ/UsgaGb27dg35bLfPYSUMmMYa1jHRkNa0UO7uPyBW9LenSurHNLw62rbSvNYcF4xnTsaz7JhZEztf3v9SyKayj4taAbrqeqjP4lLpHY4Oa52puofZJBTetkir6Lvahb9vRL3V3BXZWU/QYeFZ5Af39WORYo0BpDvG+nJbF7O8E4hNO103DjBjlrdXazAGhfIDcON8iBy5rrCLsaGnHZmeJ1J7iIisgIihBKKEQSihSglFCIPOXGjeKcxp9QCqnM9mMeTkCw+W4+hV2iDnvF/YOZxY6CSN2h4cQ4lhI5eB6ErW8vgXEo8gh2C8YwabkGh+4Gx7riaJ8l2ZSpW0aWXpxF67ZcNilJfLGA5pi0DrR1C/y5LzxOJMmdLGx2p0JqQOYOZsbGtxbSu45GPHIKkjZIPB7Q4fmqiX2S4eb04ccRdzMI7E/7KUZ4X5eiONnw5XFkNfenS7S4sOx2cDuOa+MbMjkvszFJpNO0O1VfIGjtyXQB7ucJjXtgkng7R5e8te2QlxABP3jXeA+irML3UQY/aHGzJWukAsyMZILF6TQA5Wfqse0lT3/ANWqx5ILnNbo1M062g2W6hbbHS0/pAGTsRI3tQ3UYwTenber8x9VeM912XHLLNHxJjnzaderH03pFN2sgUqqT3U8SGQcpuZAZjze0Efh01pLdNUntJ/fJPH/AL8PJ2UQ9kZfT3hxaKuw2tRuulhRLOWujYXO1Sl2kDl3QCb38wF853u340ZGSdu2R0YOhwkZEW3zFAAb0FiZXux4w8tdJ984XWrJDi301Hb5eCRwk+SePjx+WXl5UcTomyOa3WXWXOqgBz+pC98POxnzMZ9qYyOiHOLXkXYrcD+bWHj+6biO19g26v726+gWx8L907mu/rGWCythE2nX/wBVhbjhK95ylbjrz/GMflvPAeC48AEkTjKXixISCN+ZYByH19VcrD4Vw6PGibDEKa3yAs9SQABfyWWvTWsVjEPHe9rzm0pUIi0yIihAREQERQglERAREQSihSgKVCIJREQEREBERARQiCUUIgIiICIoQSihEBERAUKVCAiIglERAREQFKIgIiICIiAhREBERAREQEREBERBCIiAiIghSFCICIiCEREH/9k=",
  },

  // COLLABS
  {
    id: 35,
    name: "New Balance 5740 x Salehe Bembury",
    brand: "New Balance",
    category: "newbalance",
    price: 299,
    badge: "Collab",
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
  },
  {
    id: 36,
    name: "Adidas Gazelle 'Bold Pink'",
    brand: "Adidas",
    category: "adidas",
    price: 95,
    badge: "New",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },
];

// =============================================
// DARK MODE — apply theme BEFORE paint to avoid flash
// =============================================
(function applyThemeEarly() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
})();

// =============================================
// CART HELPERS (LocalStorage)
// =============================================
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = PRODUCTS.find((p) => p.id === productId);
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
  showNotification(`"${PRODUCTS.find(p => p.id === productId).name}" added to cart!`);
}

function removeFromCart(productId) {
  let cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  updateCartCount();
  renderCart();
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    saveCart(cart.filter((i) => i.id !== productId));
  } else {
    saveCart(cart);
  }
  updateCartCount();
  renderCart();
}

function getTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getTotalCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

// =============================================
// UPDATE CART COUNT BADGE
// =============================================
function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (el) {
    el.textContent = getTotalCount();
    el.style.animation = "none";
    el.offsetWidth;
    el.style.animation = "";
  }
}

// =============================================
// NOTIFICATION POPUP
// =============================================
let notifTimeout = null;

function showNotification(msg) {
  const notif = document.getElementById("notification");
  const text = document.getElementById("notifText");
  if (!notif) return;
  text.textContent = msg;
  notif.classList.add("show");
  clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => notif.classList.remove("show"), 2500);
}

// =============================================
// RENDER PRODUCTS (index.html)
// Accepts optional search query on top of brand filter
// =============================================
let currentFilter = "all";
let currentSearch = "";

function renderProducts(filter, search) {
  if (filter !== undefined) currentFilter = filter;
  if (search !== undefined) currentSearch = search;

  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  let visible = currentFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === currentFilter);

  if (currentSearch.trim()) {
    const q = currentSearch.trim().toLowerCase();
    visible = visible.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }

  grid.innerHTML = "";

  if (visible.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem 2rem;color:var(--text-muted);font-size:0.9rem;text-transform:uppercase;letter-spacing:0.1em;">No products found</div>`;
    return;
  }

  visible.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-info">
        <p class="product-category">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-footer">
          <div class="product-price-wrap">
            <span class="product-price-label">Lowest Ask</span>
            <span class="product-price">$${p.price.toFixed(2)}</span>
          </div>
          <button class="btn-add" data-id="${p.id}">Add to Cart</button>
        </div>
        <div class="xpress-tag">Xpress Ship</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productsGrid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-add");
      if (btn) addToCart(Number(btn.dataset.id));
    });
  }

  const strip = document.getElementById("brandFilterStrip");
  if (strip) {
    strip.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      strip.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  }

  const searchInput = document.getElementById("navSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderProducts(undefined, e.target.value);
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        renderProducts(undefined, "");
        searchInput.blur();
      }
    });
  }

  const darkBtn = document.getElementById("darkToggle");
  if (darkBtn) {
    const current = document.documentElement.getAttribute("data-theme");
    darkBtn.textContent = current === "dark" ? "☀️" : "🌙";
    darkBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      darkBtn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }
});

// =============================================
// RENDER CART (cart.html)
// =============================================
function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <span>🛒</span>
        Your cart is empty.<br/>
        <a href="index.html" style="color:var(--accent);font-weight:600;margin-top:1rem;display:inline-block;">Continue Shopping →</a>
      </div>
    `;
    updateSummary(0);
    return;
  }

  container.innerHTML = "";

  cart.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.style.animationDelay = `${i * 0.08}s`;
    el.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="cart-item-controls">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <button class="remove-btn" data-id="${item.id}" title="Remove">✕</button>
    `;
    container.appendChild(el);
  });

  updateSummary(getTotal());

  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateQty(Number(btn.dataset.id), Number(btn.dataset.delta));
    });
  });

  container.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(Number(btn.dataset.id));
    });
  });

  const clearBtn = document.getElementById("clearCartBtn");
  if (clearBtn) {
    clearBtn.onclick = () => {
      localStorage.removeItem("cart");
      updateCartCount();
      renderCart();
    };
  }
}

function updateSummary(total) {
  const sub = document.getElementById("subtotal");
  const tot = document.getElementById("totalPrice");
  if (sub) sub.textContent = `$${total.toFixed(2)}`;
  if (tot) tot.textContent = `$${total.toFixed(2)}`;
}

// =============================================
// RENDER CHECKOUT SUMMARY (checkout.html)
// =============================================
function renderCheckoutSummary() {
  const container = document.getElementById("checkoutItems");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);font-size:0.9rem">No items in cart.</p>`;
    return;
  }

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checkout-item-row";
    row.innerHTML = `
      <span>${item.name} × ${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    `;
    container.appendChild(row);
  });

  const total = getTotal();
  const el = document.getElementById("checkoutTotal");
  if (el) el.textContent = `$${total.toFixed(2)}`;
}
