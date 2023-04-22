# Introduction:

This project is about predicting the price of a laptop based on various features. In this project, I have used different machine learning algorithms and data analysis techniques to predict the price of a laptop accurately.

# Dataset:
The dataset used for this project is collected from different sources and consists of various features such as brand, processor, memory, hard disk, screen size, weight, and price. The dataset was preprocessed to handle missing values and outliers.

# Technologies:

Python programming language
Scikit-learn library for machine learning algorithms
Pandas library for data manipulation and preprocessing
Seaborn library for data visualization

# Methodology:
I started by importing the dataset and performed exploratory data analysis to understand the data and its distribution. Then, I did data preprocessing, including handling missing values, categorical encoding, and feature scaling. After preprocessing the data, I visualized the data using different charts and graphs to understand the correlations between different features.

Next, I split the data into training and testing sets and used different machine learning algorithms to predict the price of the laptop. After trying different algorithms, I found that Random Forest Regressor algorithm gave the best result. I then fine-tuned the hyperparameters of the model using Optuna.

![image](https://user-images.githubusercontent.com/66107066/233779486-847fe546-756c-4a4b-92a6-f5993b4579e3.png)


# Results:
After applying the Random Forest Regressor algorithm and fine-tuning the hyperparameters, I got the following results:

Root Mean Squared Error (RMSE): 2759925.03
Mean Absolute Error (MAE): 1709016.30
R2 Score: 0.77

# Conclusion:
This project shows that it is possible to predict the price of a laptop accurately using machine learning algorithms and data analysis techniques. The Random Forest Regressor algorithm gave the best result in this project, but other algorithms can also be used depending on the nature of the problem.
