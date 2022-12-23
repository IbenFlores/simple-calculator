class PagesController < ApplicationController
  def home
    @calc_nums = [[7, 8, 9],
                  [4, 5, 6],
                  [1, 2, 3],
                  [0]]
    @calc_syms = %w[+ - * / % **]
  end
end
